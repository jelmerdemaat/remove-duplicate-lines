const removeDuplicateLines = require('..');
const test = require('ava');

test(async t => {
	const basic = await removeDuplicateLines(`
		test
		test
		test2
		test3
		test34
		test34
		test
		test2
	`);

	t.is(basic, `
		test
		test2
		test3
		test34
		test
		test2
	`);

	const unique = await removeDuplicateLines(`
		test
		test
		test2
		test3
		test34
		test34
		test
		test2
	`,
		{ unique: true }
	);

	t.is(unique,`
		test
		test2
		test3
		test34
	`);
})
