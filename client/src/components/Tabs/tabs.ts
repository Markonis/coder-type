declare global {
  interface TabsTagNameMap {
    [Tabs.tag]: Tabs;
  }
  interface HTMLElementTagNameMap extends TabsTagNameMap {}

  interface TabsEventMap {
    [Tabs.events.change]: CustomEvent<{ activeTab: string }>;
  }
  interface ElementEventMap extends TabsEventMap {}
}

export class Tabs extends HTMLElement {
  static tag = "ui-tabs" as const;
  static events = {
    change: "change",
  } as const;

  private tabButtons: HTMLButtonElement[] = [];
  private tabContents: HTMLElement[] = [];
  private activeTab: string = "";

  constructor() {
    super();
    this.classList.add("ui-tabs");
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private render() {
    this.innerHTML = `
      <ul class="nav nav-tabs" role="tablist">
        <!-- Tab buttons will be inserted here -->
      </ul>
      <div class="tab-content">
        <!-- Tab content will be inserted here -->
      </div>
    `;
  }

  addTab(id: string, label: string, content: HTMLElement, active: boolean = false) {
    const nav = this.querySelector(".nav") as HTMLUListElement;
    const tabContent = this.querySelector(".tab-content") as HTMLDivElement;

    const tabButton = document.createElement("button");
    tabButton.className = `nav-link ${active ? "active" : ""}`;
    tabButton.id = `tab-${id}`;
    tabButton.setAttribute("data-bs-toggle", "tab");
    tabButton.setAttribute("data-bs-target", `#content-${id}`);
    tabButton.setAttribute("role", "tab");
    tabButton.setAttribute("aria-controls", `content-${id}`);
    tabButton.setAttribute("aria-selected", active ? "true" : "false");
    tabButton.textContent = label;

    const listItem = document.createElement("li");
    listItem.className = "nav-item";
    listItem.setAttribute("role", "presentation");
    listItem.appendChild(tabButton);

    const contentDiv = document.createElement("div");
    contentDiv.className = `tab-pane fade ${active ? "show active" : ""}`;
    contentDiv.id = `content-${id}`;
    contentDiv.setAttribute("role", "tabpanel");
    contentDiv.setAttribute("aria-labelledby", `tab-${id}`);
    contentDiv.appendChild(content);

    nav.appendChild(listItem);
    tabContent.appendChild(contentDiv);

    this.tabButtons.push(tabButton);
    this.tabContents.push(contentDiv);

    if (active || this.activeTab === "") {
      this.activeTab = id;
    }
  }

  private setupEventListeners() {
    this.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.matches("[data-bs-toggle='tab']")) {
        const tabId = target.getAttribute("data-bs-target")?.replace("#content-", "");
        if (tabId && tabId !== this.activeTab) {
          this.setActiveTab(tabId);
        }
      }
    });

    // Listen for Bootstrap tab events
    this.addEventListener("shown.bs.tab", (event) => {
      const target = event.target as HTMLElement;
      const tabId = target.getAttribute("data-bs-target")?.replace("#content-", "");
      if (tabId && tabId !== this.activeTab) {
        this.setActiveTab(tabId);
      }
    });
  }

  setActiveTab(tabId: string) {
    if (this.activeTab === tabId) return;

    this.activeTab = tabId;

    // Update tab buttons
    this.tabButtons.forEach(button => {
      const isActive = button.getAttribute("data-bs-target") === `#content-${tabId}`;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    // Update tab content
    this.tabContents.forEach(content => {
      const isActive = content.id === `content-${tabId}`;
      content.classList.toggle("show", isActive);
      content.classList.toggle("active", isActive);
    });

    // Dispatch change event
    this.dispatchEvent(
      new CustomEvent(Tabs.events.change, {
        detail: { activeTab: tabId },
        bubbles: true,
      })
    );
  }

  getActiveTab(): string {
    return this.activeTab;
  }
}

customElements.define(Tabs.tag, Tabs);
