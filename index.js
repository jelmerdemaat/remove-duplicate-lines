'use strict';

const fs = require('fs');
const encoding = 'utf8';

const removeDuplicateLines = source => new Promise ((resolve, reject) => {
    if (!source) {
        throw Error('No input file is given.');
    }

    fs.readFile(source, encoding, (err, data) => {
        if (err) {
            reject(err);

            return;
        }

        const inputArray = data.split('\n');

        const output = inputArray
            .filter((item, key) => inputArray[key - 1] !== item)
            .join('\n');

        resolve(output);
    })
});

module.exports = removeDuplicateLines;
