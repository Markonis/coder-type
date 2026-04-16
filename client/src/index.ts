import "./extensions";
import { ReportView } from "./report-view";
import { snippets } from "./snippet-library";
import { SnippetSelect } from "./snippet-select";
import { TypingPanel } from "./typing-panel";
import { TypingTracker } from "./typing-tracker";
import { Tabs } from "./components/Tabs/tabs";
import { HistoryView } from "./history-view";
import { HistoryStorage } from "./history-storage";

declare global {
  // deno-lint-ignore no-explicit-any
  const bootstrap: any;
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(SnippetSelect.tag)!;
  const typingPanel = document.querySelector(TypingPanel.tag)!;
  const typingTracker = document.querySelector(TypingTracker.tag)!;
  const reportModal = new bootstrap.Modal(document.getElementById("report-modal")!);
  const reportView = document.querySelector(ReportView.tag)!;
  const next = document.getElementById("next")!;
  const link = document.getElementById("snippet-url")! as HTMLAnchorElement;
  const tabs = document.querySelector(Tabs.tag)!;
  const historyView = document.querySelector(HistoryView.tag)!;

  let snippetIndex = 0;
  function loadSnippet(index: number) {
    snippetIndex = index;

    const snippet = snippets[index];
    link.href = snippet.url;
    link.text = snippet.url;

    typingPanel.load(snippet);
    typingTracker.reset();
  }

  loadSnippet(0);

  typingPanel.addEventListener(TypingPanel.events.type, (evt) => {
    typingTracker.onType(evt.detail);
  });

  select.addEventListener(SnippetSelect.events.change, (evt) => {
    loadSnippet(evt.detail.index);
  });

  typingTracker.addEventListener(TypingTracker.events.finish, (evt) => {
    typingPanel.enabled = false;
    
    const currentSnippet = snippets[snippetIndex];
    HistoryStorage.save(evt.detail, {
      name: currentSnippet.label,
      language: currentSnippet.language,
    });
    
    reportModal.show();
    reportView.show(evt.detail);
  });

  reportModal._element.addEventListener("hidden.bs.modal", () => {
    loadSnippet(snippetIndex);
  });

  reportModal._element.addEventListener("shown.bs.modal", () => {
    next.focus();
  });

  next.addEventListener("click", () => {
    select.selectIndex((snippetIndex + 1) % snippets.length);
  });

  tabs.addEventListener(Tabs.events.change, (evt) => {
    if (evt.detail.activeTab === "history") {
      historyView.refresh();
    }
  });
});
