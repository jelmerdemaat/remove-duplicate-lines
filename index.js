'use strict';

let defaults = {};

const filter = (line, index, lines) => {
	if (defaults.unique) {
		return lines.indexOf(line) === index;
	}

	return lines[index - 1] !== line;
};

const removeDuplicateLines = (source, options = {}) => new Promise ((resolve, reject) => {
	if (!source) {
		reject('No input is given.');
	}

	defaults = Object.assign(defaults, options);

	const inputArray = source.split('\n');

	const output = inputArray
		.filter(filter)
		.join('\n');

	resolve(output);
});

module.exports = removeDuplicateLines;
