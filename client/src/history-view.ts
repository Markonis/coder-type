import { HistoryEntry } from "./types";
import { HistoryStorage } from "./history-storage";
import { ReportView } from "./report-view";

declare global {
  interface HistoryViewTagNameMap {
    [HistoryView.tag]: HistoryView;
  }
  interface HTMLElementTagNameMap extends HistoryViewTagNameMap {}
}

export class HistoryView extends HTMLElement {
  static tag = "history-view" as const;

  constructor() {
    super();
    this.classList.add("history-view");
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    const entries = HistoryStorage.getAll();
    
    if (entries.length === 0) {
      this.renderEmptyState();
      return;
    }

    this.innerHTML = `
      <div class="row g-3">
        ${entries.map(entry => this.renderHistoryCard(entry)).join("")}
      </div>
    `;
  }

  private renderEmptyState() {
    this.innerHTML = `
      <div class="text-center py-5">
        <div class="text-muted mb-3">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="opacity-50">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2zM19 18H5V8h14v10z"/>
          </svg>
        </div>
        <h5 class="text-muted">No typing history yet</h5>
        <p class="text-muted mb-0">Complete some typing sessions to see your progress here!</p>
      </div>
    `;
  }

  private renderHistoryCard(entry: HistoryEntry): string {
    const date = new Date(entry.timestamp);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 history-card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div>
              <h6 class="card-title mb-0">${this.escapeHtml(entry.snippet.name)}</h6>
              <small class="text-muted">${entry.snippet.language}</small>
            </div>
            <div class="text-end">
              <small class="text-muted">${formattedDate}</small><br>
              <small class="text-muted">${formattedTime}</small>
            </div>
          </div>
          <div class="card-body">
            <div class="d-flex gap-3 mb-3">
              <div class="flex-fill">
                <div class="text-primary small fw-bold">CPM</div>
                <div class="fs-5 fw-bold">${Math.round(entry.cpm)}</div>
              </div>
              <div class="flex-fill">
                <div class="text-info small fw-bold">ACC</div>
                <div class="fs-5 fw-bold">${Math.round(entry.acc * 100)}%</div>
              </div>
            </div>
            <div class="mini-chart">
              ${this.renderMiniChart(entry.report)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private renderMiniChart(report: any): string {
    const buckets = ReportView.compute(report, 8);
    return ReportView.chart(buckets);
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  refresh() {
    this.render();
  }

  clearHistory() {
    HistoryStorage.clear();
    this.render();
  }
}

customElements.define(HistoryView.tag, HistoryView);
