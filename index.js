'use strict';

const fs = require('fs');
let finalCode = [];
const codeBlock1 = `const arr = ['karl', 'nich', 'rick'];`;
const codeBlock2 = `arr.forEach(x => console.log(x));`;
const makeArray = require('./lib/makeArray');
const codeBuffer = require('./lib/codeBuffer');
//
makeArray(codeBlock1, codeBlock2, finalCode);
//generate buffer with code
let blankBuffer = Buffer.from('                                                                                                                                                                         ');
let testArr = [100];
let testBuffer = Buffer.from(' ');
let newBuffer = codeBuffer(testBuffer, testArr);
console.log(newBuffer);
//could use a promise
codeBuffer(blankBuffer);
//
fs.writeFileSync('./files/loop.js', blankBuffer);