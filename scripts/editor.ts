import { backspaceKey, enterKey, tabKey } from "./keyboard";
import { separatorLine } from "./terminal";

const editorElement = document.getElementById("editor") as HTMLElement;
const statsElement = document.getElementById("stats") as HTMLElement;

const linesPerPage = 3;
const typingTime = 45000;
const cursorClassName = "cursor";
const nextClassName = "next";
const wrongClassName = "wrong";
const whitespaceRegex = /\s/;

export type EditorResult = {
	totalCharacters: number;
	correctCharacters: number;
	reachedTheEnd: boolean;
	totalTime: number;
}

const printCode = (lines: string[]) => {
	editorElement.innerHTML = "";
	let index = 0;
	for (const line of lines) {
		for (const character of line) {
			const span = document.createElement("span");
			span.innerText = character;
			if (index > 0) span.classList.add("next");
			if (whitespaceRegex.test(character))
				span.setAttribute("data-whitespace", "true");
			editorElement.appendChild(span);
			index++;
		}
		editorElement.appendChild(document.createElement("br"));
	}

	const firstElement = editorElement.firstChild as Element;
	firstElement.classList.add(cursorClassName);
	return firstElement;
}

const printStats = (result: EditorResult) => {
	const secondsLeft = ((typingTime - result.totalTime) / 1000).toFixed(0);
	statsElement.innerHTML = [
		"",
		separatorLine,
		`Time left: ${secondsLeft} seconds`,
		`Characters typed: ${result.totalCharacters}`,
		`Errors: ${result.totalCharacters - result.correctCharacters}`,
	].join("<br/>")
}

const normalizeCode = (code: string) => {
	return code.trim().replace(/\t/g, "  ");
}

export const startEditor = (code: string) => {
	code = normalizeCode(code);
	return new Promise<EditorResult>(async resolve => {
		const allLines = code.split(/[ \t]*\r?\n/)
			.filter(l => l.trim().length > 0)
			.map(l => l + " ");

		let firstLineIndex = 0;
		let charIndex = 0;
		let lineIndex = 0;
		let totalCharacters = 0;
		let correctCharacters = 0;
		let pageLines = allLines.slice(firstLineIndex, linesPerPage);
		let line = pageLines[lineIndex];
		let element = printCode(pageLines);
		let startTime = 0;
		let timeoutHandle = 0;
		let statsIntervalHandle = 0;
		let lineCorrectness: boolean[] = [];

		const advanceCharacter = (isCorrect: boolean) => {
			element.classList.remove(cursorClassName);
			if (!isCorrect) element.classList.add(wrongClassName);
			element = element.nextElementSibling as Element;
			element.classList.remove(nextClassName);
			element.classList.add(cursorClassName);
			lineCorrectness.push(isCorrect);
			charIndex++;
		}

		const applyBackspace = () => {
			element.classList.remove(cursorClassName);
			element.classList.add(nextClassName);
			element = element.previousElementSibling as Element;
			element.classList.remove(wrongClassName);
			element.classList.add(cursorClassName);
			charIndex--;
			if (lineCorrectness[charIndex])
				correctCharacters--;
			lineCorrectness = lineCorrectness.slice(0, -1);
		}

		const advanceLine = () => {
			line = pageLines[++lineIndex];
			charIndex = 0;
			lineCorrectness = []
			element.classList.remove(cursorClassName);
			element = element.nextElementSibling?.nextElementSibling as Element;
			element.classList.remove(nextClassName);
			element.classList.add(cursorClassName);
			advanceWhitespace();
		}

		const advancePage = () => {
			firstLineIndex += pageLines.length;
			pageLines = allLines.slice(firstLineIndex, firstLineIndex + linesPerPage);
			lineIndex = 0;
			charIndex = 0;
			line = pageLines[lineIndex];
			element = printCode(pageLines);
			advanceWhitespace();
		}

		const advanceWhitespace = () => {
			let count = 0;
			while (charIndex + count < line.length - 1 && whitespaceRegex.test(line[charIndex + count])) {
				advanceCharacter(true);
			}
		}

		const getResult = (): EditorResult => {
			const now = new Date().valueOf();
			const totalTime = now - startTime;
			return {
				correctCharacters,
				totalCharacters,
				totalTime,
				reachedTheEnd: totalTime <= typingTime
			}
		}

		const endTyping = () => {
			document.removeEventListener("keydown", listener);
			clearTimeout(timeoutHandle);
			clearInterval(statsIntervalHandle);
			resolve(getResult());
		}

		const beginTyping = () => {
			startTime = new Date().valueOf();
			timeoutHandle = setTimeout(endTyping, typingTime);
			statsIntervalHandle = setInterval(() => printStats(getResult()), 1000);
		}

		const processKey = (key: string) => {
			if (key.length === 1 && charIndex < line.length - 1) {
				if (startTime === 0) beginTyping();
				const isCorrect = key === line[charIndex];
				advanceCharacter(isCorrect);
				correctCharacters += isCorrect ? 1 : 0;
				totalCharacters++;

				if (charIndex === line.length - 1 && lineIndex === pageLines.length - 1) {
					if (firstLineIndex < allLines.length - 1) {
						advancePage();
					} else {
						endTyping();
					}
				}
			} else if (charIndex > 0 && key === backspaceKey) {
				applyBackspace();
			} else if (charIndex === line.length - 1 && key === enterKey) {
				totalCharacters++;
				correctCharacters++;
				if (lineIndex < pageLines.length - 1) {
					advanceLine();
				}
			} else {
				return;
			}
			printStats(getResult());
		}

		const listener = (event: KeyboardEvent) => {
			const key = event.key;
			if (key === tabKey) {
				processKey(" ");
				processKey(" ");
				event.preventDefault();
				event.stopPropagation();
			} else {
				processKey(key)
			}
		}

		document.addEventListener("keydown", listener);
	});
}

export const clearEditor = () => {
	editorElement.innerHTML = "";
	statsElement.innerHTML = "";
}
