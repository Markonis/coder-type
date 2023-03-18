import { backspaceKey, enterKey } from "./keyboard";

const terminalElement = document.getElementById("terminal") as HTMLElement;
const cursorElement = document.getElementById("cursor") as HTMLElement;

export const separatorLine = "------------------------------------------------";
const promptPrefix = "$ ";
const typingDelay = 20;

export const addTerminalCursor = () => {
	if (cursorElement.parentElement !== terminalElement)
		terminalElement.appendChild(cursorElement);
}

export const removeTerminalCursor = () => {
	if (cursorElement.parentElement === terminalElement)
		terminalElement.removeChild(cursorElement);
}

export const writeLines = async (lines: string[]) => {
	removeTerminalCursor();
	for (const line of lines) {
		await writeSingleLine(line);
		writeLineBreak();
	}
	terminalElement.appendChild(cursorElement)
}

const writeSingleLine = (line: string) => {
	return new Promise<void>(resolve => {
		let index = 0;
		const interval = setInterval(() => {
			writeChar(line[index++]);
			if (index === line.length) {
				clearInterval(interval);
				resolve();
			}
		}, typingDelay);
	})
};

const writeChar = (char: string) => {
	const span = document.createElement("span");
	span.textContent = char;
	terminalElement.appendChild(span);
	terminalElement.appendChild(cursorElement);
	terminalElement.scrollTop = terminalElement.scrollHeight;
}

const removeLastChar = () => {
	terminalElement.removeChild(cursorElement);
	const last = terminalElement.lastChild;
	if (last) terminalElement.removeChild(last);
	terminalElement.appendChild(cursorElement);
}

const writeLineBreak = () => {
	terminalElement.appendChild(document.createElement("br"));
}

const inputRegex = /^[\w\d ]$/

export const readLine = () => {
	return new Promise<string>(resolve => {
		let line = "";

		const listener = (event: KeyboardEvent) => {
			const key = event.key;
			if (inputRegex.test(key)) {
				line += key;
				writeChar(key);
			} else if (key === enterKey && line.length > 0) {
				document.removeEventListener("keydown", listener);
				writeLineBreak();
				resolve(line);
			} else if (key === backspaceKey && line.length > 0) {
        event.preventDefault();
				line = line.slice(0, line.length - 1);
				removeLastChar();
			}
		}

		writeSingleLine(promptPrefix);
		document.addEventListener("keydown", listener);
	})
}

type Option = {
	label: string;
}

const chooseOptionErrorMessages = [
	["Just enter a", "Don't be silly :)"],
	["A", "I mean it this time."],
	["Ok, you've had your fun... Simply enter a", "This is important!"],
	["What does that even mean? Please, a", "I thought we were past this..."],
	["Ok, wow... Do me a favor here with a", "It's getting embarrassing now, really."],
	["Let me check... Nope, that's not a", "Let's not play these games anymore, hm?"],
]

export const chooseOption = async <T extends Option>(options: T[]) => {
	await writeLines([
		...options.map((opt, index) => `${index + 1}. ${opt.label}`),
		" "
	]);
	let tryIndex = 0;

	let index = -1;
	while (index === -1) {
		const number = parseInt(await readLine());
		if (number > 0 && number <= options.length) {
			index = number - 1;
		} else {
			const errorMessage = chooseOptionErrorMessages[tryIndex++];
			tryIndex = tryIndex % chooseOptionErrorMessages.length;

			await writeLines([
				" ",
				`${errorMessage[0]} number between 1 and ${options.length}.`,
				errorMessage[1],
				" "
			]);
		}
	}

	return options[index];
}

export const clearTerminal = () => {
	terminalElement.innerHTML = "";
}
