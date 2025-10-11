document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector("ui-tabs");
  const typeTabContent = document.getElementById("type-tab-content");
  const historyTabContent = document.getElementById("history-tab-content");

  if (tabs && typeTabContent && historyTabContent) {
    tabs.addTab("type", "Type", typeTabContent, true);
    tabs.addTab("history", "History", historyTabContent, false);
  }
});
