import {Customary, CustomaryElement} from "../../customary.mjs";

export class DarkMode extends CustomaryElement {
	/**
	 * @type {CustomaryDeclaration}
	 */
	static customary = {
		name: 'dark-mode',
		config: {attributes: ['text']},
		hooks: {externalLoader: {import_meta: import.meta}},
	}
}
Customary.declare(DarkMode);