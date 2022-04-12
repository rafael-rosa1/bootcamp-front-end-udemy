//using this whe can use import and require in the same file
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { franc, francAll } from 'franc';
var langs = require('langs');
var colors = require('colors');

const texto = process.argv[2];

const encontraIdioma = async function(texto) {
	try {
		let codigoIdioma = await franc(texto);
		let idioma = await langs.where('3', codigoIdioma);
		return console.log(idioma.name.green);
	} catch (e) {
		console.log('Texto invalido, tente novamente'.red);
	}
};
encontraIdioma(texto);
