import "./extensions";
import { base44 } from "./services/base44";
import { ReportView } from "./report-view";
import { snippets } from "./snippet-library";
import { SnippetSelect } from "./snippet-select";
import { TypingPanel } from "./typing-panel";
import { TypingTracker } from "./typing-tracker";

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

  const loginBtn = document.getElementById("login-btn")!;
  const logoutBtn = document.getElementById("logout-btn")!;
  const historyBtn = document.getElementById("history-btn")!;
  const userInfo = document.getElementById("user-info")!;
  const historyList = document.getElementById("history-list")!;
  const historyModal = new bootstrap.Modal(document.getElementById("history-modal")!);

  async function updateAuthUI() {
    const user = await base44.auth.me();
    if (user) {
      loginBtn.classList.add("d-none");
      userInfo.classList.remove("d-none");
    } else {
      loginBtn.classList.remove("d-none");
      userInfo.classList.add("d-none");
    }
  }

  loginBtn.addEventListener("click", async () => {
    await base44.auth.loginWithProvider("google");
    await updateAuthUI();
  });

  logoutBtn.addEventListener("click", async () => {
    await base44.auth.logout();
    await updateAuthUI();
  });

  historyBtn.addEventListener("click", async () => {
    const user = await base44.auth.me();
    if (user) {
      historyList.innerHTML = "Loading...";
      historyModal.show();
      const sessions = await base44.entities.Session.filter(
        { created_by: user.email },
        "-created_date"
      );

      historyList.innerHTML = sessions.map((s: any) => `
        <tr>
          <td><a href="${s.url}" target="_blank" class="small">${s.url.split("/").pop()}</a></td>
          <td>${Math.round(s.cpm)}</td>
          <td>${Math.round(s.acc * 100)}%</td>
          <td class="small text-secondary">${new Date(s.created_date).toLocaleDateString()}</td>
        </tr>
      `).join("");
    }
  });

  updateAuthUI();

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

  typingTracker.addEventListener(TypingTracker.events.finish, async (evt) => {
    typingPanel.enabled = false;
    reportModal.show();
    reportView.show(evt.detail);

    const user = await base44.auth.me();
    if (user) {
      const overall = ReportView.compute(evt.detail)[0];
      const snippet = snippets[snippetIndex];

      try {
        await base44.entities.Session.create({
          url: snippet.url,
          cpm: overall.cpm,
          acc: overall.acc,
          duration: evt.detail.duration,
          tracked: evt.detail.tracked,
        });
      } catch (e) {
        console.error("Failed to save session", e);
      }
    }
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
});
