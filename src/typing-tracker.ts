import { TrackedTypeDetail, TypeDetail, TypingReport } from "./types";

declare global {
  interface TypingTrackerTagNameMap {
    [TypingTracker.tag]: TypingTracker;
  }
  interface HTMLElementTagNameMap extends TypingTrackerTagNameMap {}

  interface TypingTrackerEventMap {
    [TypingTracker.events.finish]: CustomEvent<TypingReport>;
  }
  interface ElementEventMap extends TypingTrackerEventMap {}
}

export class TypingTracker extends HTMLElement {
  static tag = "typing-tracker" as const;
  static events = {
    finish: "finish",
  } as const;

  private static durationSeconds = 30;

  private startTime: number | null = null;
  private interval: number | null = null;
  private tracked: TrackedTypeDetail[] = [];

  private timeLeftSeconds: number = TypingTracker.durationSeconds;
  private timeView: HTMLElement;

  constructor() {
    super();
    this.timeView = document.createElement("span");
    this.append(this.timeView);
    this.reset();
  }

  get isRunning(): boolean {
    return !!this.interval;
  }

  onType(detail?: TypeDetail) {
    this.update();

    if (this.startTime === null) {
      this.startTime = Date.now();
    }

    const timestamp = Date.now() - this.startTime;
    this.tracked.push({ detail, timestamp });

    if (this.interval === null) {
      this.interval = setInterval(() => {
        this.timeLeftSeconds -= 1;
        this.update();
        if (this.timeLeftSeconds === 0) {
          this.finish();
        }
      }, 1000);
    }
  }

  private finish() {
    const report: TypingReport = {
      duration: TypingTracker.durationSeconds * 1000,
      tracked: this.tracked,
    };

    this.dispatchEvent(
      new CustomEvent(
        TypingTracker.events.finish,
        { detail: report },
      ),
    );
    this.reset();
  }

  reset() {
    this.timeLeftSeconds = TypingTracker.durationSeconds;
    this.timeView.textContent = "Start typing...";
    this.startTime = null;
    this.tracked = [];
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private update() {
    this.timeView.textContent = `Time: ${this.timeLeftSeconds}`;
  }
}

customElements.define(TypingTracker.tag, TypingTracker);
