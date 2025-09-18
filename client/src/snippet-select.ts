import { snippets } from "./snippet-library";

declare global {
  interface SnippetSelectTagNameMap {
    "snippet-select": SnippetSelect;
  }
  interface HTMLElementTagNameMap extends SnippetSelectTagNameMap {}

  interface SnippetSelectEventMap {
    [SnippetSelect.events.change]: CustomEvent<{ index: number }>;
  }
  interface ElementEventMap extends SnippetSelectEventMap {}
}

export class SnippetSelect extends HTMLElement {
  static tag = "snippet-select" as const;
  static events = { change: "snippet:change" } as const;

  private select: HTMLSelectElement;

  constructor() {
    super();
    this.select = document.createElement("select");
    this.select.classList.add("form-select");
    this.append(this.select);
    this.select.append(...SnippetSelect.options);
    this.select.addEventListener("change", () => {
      const index = parseInt(this.select.value)
      if (index < 0) return;
      this.dispatchChange(index);
    });
  }

  private dispatchChange(index: number) {
    this.dispatchEvent(
      new CustomEvent(
        SnippetSelect.events.change,
        { detail: { index } },
      ),
    );
  }

  selectIndex(index: number) {
    this.select.querySelectorAll("option")
      .forEach((el, i) => el.selected = i === index);
    this.dispatchChange(index);
  }

  static options: HTMLOptionElement[] = snippets.map((sn, index) => {
    const opt = document.createElement("option");
    opt.value = index.toString();
    opt.text = sn.label;
    return opt;
  });
}

customElements.define("snippet-select", SnippetSelect);
