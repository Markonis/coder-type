import { TrackedTypeDetail, TypingReport } from "./types";

declare global {
  interface ReportViewTagNameMap {
    [ReportView.tag]: ReportView;
  }
  interface HTMLElementTagNameMap extends ReportViewTagNameMap {}
}

type Bucket = {
  start: number;
  end: number;
  tracked: TrackedTypeDetail[];
  cpm: number;
  acc: number;
};

export class ReportView extends HTMLElement {
  static tag = "report-view" as const;

  constructor() {
    super();
  }

  show(report: TypingReport) {
    const overall = ReportView.compute(report).first;
    const buckets = ReportView.compute(report, 10);

    this.innerHTML = `
      <div class="d-flex gap-2 mb-2">
        ${ReportView.stat("CPM", "text-primary", Math.round(overall.cpm))}
        ${ReportView.stat("ACC", "text-info", Math.round(overall.acc * 100) + "%")}
      </div>
      ${ReportView.chart(buckets)}
    `;
  }

  static stat(label: string, labelClass: string, value: string | number) {
    return `
      <div class="rounded bg-body-tertiary p-4 flex-fill">
        <h3 class="fs-6 m-0 ${labelClass}">${label}</h3>
        <div class="font-monospace fs-1">${value}</div>
      </div>
    `;
  }

  static chart(buckets: Bucket[]) {
    const w = 600;
    const h = 200;
    const pad = 4;

    const pW = w - 2 * pad;
    const pH = h - 2 * pad;
    const stepX = pW / (buckets.length - 1);
    const stepY = pH / 4;

    const cpmPoints = ReportView.points(buckets, h, stepX, pad, (b) => b.cpm);
    const accPoints = ReportView.points(buckets, h, stepX, pad, (b) => b.acc);

    let grid = "";
    for (let x = pad + stepX; x < pW; x += stepX) {
      grid += `M ${x} 0 V ${h} `;
    }

    for (let y = pad + stepY; y < pH; y += stepY) {
      grid += `M 0 ${y} H ${w} `;
    }

    return `
      <div class="rounded bg-body-tertiary w-100 p-2">
        <svg
          class="w-100"
          style="aspect-ratio: ${w} / ${h}"
          viewBox="0 0 ${w} ${h}"
        >
          <path
            d="${grid}"
            fill="none"
            stroke="var(--bs-secondary)"
            stroke-width="1"
            stroke-dasharray="8"
          />

          ${ReportView.line(accPoints, "var(--bs-info)")}
          ${ReportView.line(cpmPoints, "var(--bs-primary)")}
        </svg>
      </div>
    `;
  }

  static points(
    buckets: Bucket[],
    h: number,
    stepX: number,
    pad: number,
    mapper: (b: Bucket) => number,
  ): [number, number][] {
    const max = Math.max(...buckets.map(mapper));
    const pH = h - 2 * pad;
    return buckets.map((b, i) => [
      pad + i * stepX,
      h - (pad + (mapper(b) / max) * pH),
    ]);
  }

  static line(points: [number, number][], color: string) {
    const dots = points
      .map((p) => ReportView.cirle(p, 4, color))
      .join("");

    return `
      <path
        d="${ReportView.path(points)}"
        fill="none"
        stroke="${color}"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      ${dots}
    `;
  }

  static cirle(p: [number, number], r: number, fill: string) {
    return `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${fill}"></circle>`;
  }

  static path(points: [number, number][], smooth = 0.5) {
    if (points.length < 2) return "";

    let d = `M ${points[0][0]} ${points[0][1]}`;

    for (let i = 1; i < points.length; i++) {
      const current = points[i];
      const prev = points[i - 1];
      const dx = current[0] - prev[0];
      const cp1 = [prev[0] + dx * smooth, prev[1]];
      const cp2 = [current[0] - dx * smooth, current[1]];

      d += ` C ${cp1[0]} ${cp1[1]} ${cp2[0]} ${cp2[1]} ${current[0]} ${current[1]}`;
    }

    return d;
  }

  static compute({ tracked, duration }: TypingReport, count: number = 1) {
    const bucketDuration = duration / count;

    const result: Bucket[] = [];
    if (!tracked.length) return result;

    let start = 0;
    while (start < duration) {
      const end = Math.min(start + bucketDuration, duration);
      const bucketTracked = tracked
        .filter((t) => t.timestamp >= start && t.timestamp < end);

      if (bucketTracked.length === 0) {
        result.push({ start, end, tracked: [], cpm: 0, acc: 0 });
      } else {
        const correct = bucketTracked
          .filter((t) => t.detail?.isCorrect)
          .length;

        result.push({
          start,
          end,
          tracked: bucketTracked,
          cpm: correct / Math.max(end - start, 1) * 60_000,
          acc: correct / Math.max(bucketTracked.length, 1),
        });
      }

      start += bucketDuration;
    }

    return result;
  }
}

customElements.define(ReportView.tag, ReportView);
