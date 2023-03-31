import { linuxRepo } from "./linux.js";
import { reactRepo } from "./react.js";
import { rustRepo } from "./rust.js";
import { tensorFlowRepo } from "./tensorflow.js";

export type RepoFile = {
	path: string;
	code: string;
}

export type Repo = {
	label: string;
	url: string;
	files: RepoFile[];
}

export const repoOptions: Repo[] = [
	linuxRepo,
	reactRepo,
	tensorFlowRepo,
	rustRepo,
]
