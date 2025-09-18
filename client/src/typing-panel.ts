import { Snippet, TypeDetail } from "./types";

declare global {
  interface TypingPanelTagNameMap {
    [TypingPanel.tag]: TypingPanel;
  }
  interface HTMLElementTagNameMap extends TypingPanelTagNameMap {}

  interface TypingPanelEventMap {
    [TypingPanel.events.type]: CustomEvent<TypeDetail | null>;
  }
  interface ElementEventMap extends TypingPanelEventMap {}

  const hljs: {
    highlight: (text: string, opts: { language: string }) => { value: string };
  };
}

const errorClass = "typing-error";
const futureClass = "typing-future";
const currentClass = "typing-current";

export class TypingPanel extends HTMLElement {
  static tag = "typing-panel" as const;
  static events = { type: "type" } as const;

  private text: string = "";
  private pre: HTMLPreElement;
  private index = 0;
  private input: HTMLInputElement;
  enabled = true;

  constructor() {
    super();
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.classList.add("visually-hidden");
    this.append(this.input);

    this.pre = document.createElement("pre");
    this.pre.classList.add("m-0", "overflow-hidden", "hljs");
    this.append(this.pre);

    this.input.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (!this.enabled) return;
      const char = TypingPanel.getChar(event.key);
      this.processChar(char);
    });

    this.addEventListener("click", () => {
      this.input.focus();
    });
  }

  load({ text, language }: Snippet) {
    this.enabled = true;
    this.index = 0;
    this.text = TypingPanel.prepareText(text);
    this.pre.innerHTML = TypingPanel.highlight(this.text, language);
    this.input.focus();
  }

  private processChar(char: string) {
    if (char === "Shift") return;

    if (char === "Backspace") {
      if (this.index === 0) return;
      this.currentSpan.classList.remove(currentClass);

      this.index -= 1;
      this.currentSpan.classList.add(futureClass, currentClass);
      this.currentSpan.classList.remove(errorClass);

      this.dispatchEvent(new CustomEvent(TypingPanel.events.type));
    } else if (this.index < this.text.length) {
      const isCorrect = char === this.text[this.index];
      this.dispatchEvent(
        new CustomEvent<TypeDetail>(
          TypingPanel.events.type,
          { detail: { isCorrect } },
        ),
      );
      this.moveForward(isCorrect);
    }
  }

  private moveForward(correct: boolean) {
    this.currentSpan.classList.remove(futureClass, currentClass);

    if (correct) {
      this.currentSpan.classList.remove(errorClass);
    } else {
      this.currentSpan.classList.add(errorClass);
    }

    this.index += 1;
    this.skipWhitespace();

    this.currentSpan.classList.add(currentClass);
  }

  private skipWhitespace() {
    if (this.text[this.index - 1] === "\n") {
      while (this.text[this.index].match(/\s/)) {
        this.index += 1;
      }
    }
  }

  private get currentSpan(): HTMLSpanElement {
    return this.pre.children.item(this.index) as HTMLSpanElement;
  }

  static prepareText(text: string): string {
    return text
      .replaceAll("\r", "")
      .replaceAll("\t", "  ");
  }

  static highlight(text: string, language: string) {
    const pre = document.createElement("pre");
    pre.classList.add("m-0");
    pre.innerHTML = hljs.highlight(text, { language }).value;
    const nodes = Array.from(pre.childNodes);
    pre.innerHTML = "";
    let index = 0;

    function addChar(char: string, className?: string) {
      const outerSpan = document.createElement("span");
      if (className) outerSpan.className = className;
      outerSpan.classList.add(futureClass);

      const innerSpan = document.createElement("span");
      innerSpan.textContent = char === "\n" ? ` ${char}` : char;
      outerSpan.append(innerSpan);

      if (index === 0) outerSpan.classList.add(currentClass);
      pre.append(outerSpan);
      index++;
    }

    function addText(str: string, className?: string) {
      for (const char of str) {
        addChar(char, className);
      }
    }

    for (const node of nodes) {
      if (!node.textContent) continue;
      if (node.nodeType === Node.TEXT_NODE) {
        addText(node.textContent);
      } else if (node instanceof HTMLSpanElement) {
        addText(node.textContent, node.className);
      }
    }

    addChar(" ");
    return pre.innerHTML;
  }

  static getChar(key: string): string {
    switch (key) {
      case "Enter":
        return "\n";
      default:
        return key;
    }
  }
}

customElements.define("typing-panel", TypingPanel);
