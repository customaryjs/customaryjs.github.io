import {Customary, CustomaryElement} from "../../customary.mjs";

export class LightMode extends CustomaryElement {
	/**
	 * @type {CustomaryDeclaration}
	 */
	static customary = {
		name: 'light-mode',
		config: {attributes: ['text']},
		hooks: {externalLoader: {import_meta: import.meta}}
	}
}
Customary.declare(LightMode);
