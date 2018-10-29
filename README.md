# remove-duplicate-lines

[GitHub](https://github.com/jelmerdemaat/remove-duplicate-lines) | [NPM](https://www.npmjs.com/package/remove-duplicate-lines) | [@jelmerdemaat](https://twitter.com/jelmerdemaat)

Removes duplicate lines from a given input file.

## Usage

Install:

```bash
npm install remove-duplicate-lines
```

Use:

```js
const removeDuplicateLines = require('remove-duplicate-lines');

/*
 * index.txt
 * --------
 * testing
 * testing
 * testing123
 */

removeDuplicateLines('index.txt')
	.then(output => console.log(output))
	// Logs:
	// testing
	// testing123
	.catch(error => console.log(error))
	// Logs potential errors
```
