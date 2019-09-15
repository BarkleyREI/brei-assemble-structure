/*global describe, it, require, __dirname*/

'use strict';

const util = require('brei-util');
const u = require('util');

const root = __dirname + '/..';

let valid = [
	{
		'.github':
			[
				'CONTRIBUTING.md',
				'ISSUE_TEMPLATE.md',
				'PULL_REQUEST_TEMPLATE.md'
			]
	},
	'.travis.yml',
	'README.md',
	{
		atoms: [
			'logo.hbs'
		]
	},
	{
		fixtures: [
			'default-content.json',
			'global-footer.json',
			'global-header.json',
			'masthead.json'
		]
	},
	{
		helpers: [
			'.gitkeep'
		]
	},
	'home-page.hbs',
	{
		includes: [
			'_access-nav.hbs',
			'_css-main.hbs',
			'_fonts.hbs',
			'_js-home.hbs',
			'_js-level.hbs',
			'_js-main.hbs',
			'_js-modernizr.hbs',
			'_meta.hbs',
			'_svg.hbs'
		]
	},
	'index.hbs',
	{
		layouts: [
			'component.hbs',
			'default.hbs',
			'home.hbs',
			'index.hbs',
			'level.hbs'
		]
	},
	{
		molecules: [
			'masthead.hbs',
			'primary-nav.hbs'
		]
	},
	{
		organisms: [
			'_global-footer.hbs',
			'_global-header.hbs',
			'_masthead.hbs'
		]
	},
	'package.json',
	{
		test: [
			'test.js'
		]
	}
];

describe('brei-assemble-structure -- Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root);

		let actual = util.ftree(ttree);

		let expected = util.filterObject(valid);

		console.log('\n------- actual --------\n');
		console.log(u.inspect(actual, false, null));

		console.log('\n------- expected --------\n');
		console.log(u.inspect(expected, false, null));

		util.assert(util.deep(expected, actual));

	});

});

