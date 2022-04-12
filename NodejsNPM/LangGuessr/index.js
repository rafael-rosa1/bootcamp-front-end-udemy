//using this whe can use import and require in the same file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { franc, francAll } from 'franc';
var langs = require('langs');
var colors = require('colors');

const input = process.argv[2];

const findLanguage = async function(input) {
	try {
		let languageCode = await franc(input);
		let language = await langs.where('3', languageCode);
		return console.log(language.name.green);
	} catch (e) {
		console.log('Could not match a language. Try again with a larger sample'.red);
	}
};
findLanguage(input);
