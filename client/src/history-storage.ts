import { HistoryEntry, TypingReport } from "./types";

export class HistoryStorage {
  private static readonly STORAGE_KEY = "coderType_history";
  private static readonly MAX_ENTRIES = 100;

  static save(report: TypingReport, snippet: { name: string; language: string }): void {
    try {
      const entries = this.getAll();
      const cpm = this.calculateCPM(report);
      const acc = this.calculateAccuracy(report);

      const newEntry: HistoryEntry = {
        id: Date.now().toString(),
        report,
        snippet,
        timestamp: Date.now(),
        cpm,
        acc,
      };

      entries.unshift(newEntry);

      const trimmedEntries = entries.slice(0, this.MAX_ENTRIES);

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmedEntries));
    } catch (error) {
      console.error("Failed to save history entry:", error);
    }
  }

  static getAll(): HistoryEntry[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];
      
      const entries = JSON.parse(stored) as HistoryEntry[];
      return Array.isArray(entries) ? entries.toSorted((a, b) => b.timestamp - a.timestamp) : [];
    } catch (error) {
      console.error("Failed to load history entries:", error);
      return [];
    }
  }

  static getItem(id: string): HistoryEntry | null {
    const entries = this.getAll();
    return entries.find(entry => entry.id === id) || null;
  }

  static clear(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear history:", error);
    }
  }

  static getStats(): { totalEntries: number; averageCPM: number; averageAccuracy: number } {
    const entries = this.getAll();
    
    if (entries.length === 0) {
      return { totalEntries: 0, averageCPM: 0, averageAccuracy: 0 };
    }

    const totalCPM = entries.reduce((sum, entry) => sum + entry.cpm, 0);
    const totalAccuracy = entries.reduce((sum, entry) => sum + entry.acc, 0);

    return {
      totalEntries: entries.length,
      averageCPM: Math.round(totalCPM / entries.length),
      averageAccuracy: Math.round((totalAccuracy / entries.length) * 100) / 100,
    };
  }

  private static calculateCPM(report: TypingReport): number {
    const correctChars = report.tracked.filter(t => t.detail?.isCorrect).length;
    const durationMinutes = report.duration / 60000;
    return Math.round(correctChars / durationMinutes);
  }

  private static calculateAccuracy(report: TypingReport): number {
    const totalChars = report.tracked.length;
    const correctChars = report.tracked.filter(t => t.detail?.isCorrect).length;
    return totalChars > 0 ? correctChars / totalChars : 0;
  }
}
