# remove-duplicate-lines

[GitHub](https://github.com/jelmerdemaat/remove-duplicate-lines) | [NPM](https://www.npmjs.com/package/remove-duplicate-lines) | [@jelmerdemaat](https://twitter.com/jelmerdemaat)

Removes duplicate lines from a given input text.

## Usage

Install:

```bash
npm install remove-duplicate-lines
```

Use:

```js
const removeDuplicateLines = require('remove-duplicate-lines');

const example = `
	jelmer
	jelmer
	de
	maat
	testing123
	testing
	testing
	testing123
`;

removeDuplicateLines(example)
	.then(output => console.log(output))
	// Logs:
	// jelmer
	// de
	// maat
	// testing123
	// testing
	// testing123
	.catch(error => console.log(error))
	// Logs potential errors
```

## Arguments

`source` | _String_ | The input text (required)

`options` | _Boolean_ | An object containing options.

## Options

`unique` | _Boolean_ | Default: `false` | Allow every line only once in the entire text.

Pass options in an object as the seconds argument. Example:

```js
const example = `
	jelmer
	jelmer
	de
	maat
	testing123
	testing
	testing
	testing123
`;

removeDuplicateLines(example, { unique: true })
	.then(output => console.log(output))
	// Logs:
	// jelmer
	// de
	// maat
	// testing
	// testing123
	.catch(error => console.log(error))
	// Logs potential errors
```
