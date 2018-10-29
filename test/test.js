const fs = require('fs');

const removeDuplicateLines = require('..');
const test = require('ava');

const expected = fs.readFileSync('test/output.css', 'utf8');

test(async t => {
	const output = await removeDuplicateLines('test/input.css')
		.catch(error => console.log(error));

	t.is(output, expected);
})
