'use strict';

const fs = require('fs');
let finalCode = [];
const codeBlock1 = `const arr = ['karl', 'nich', 'rick'];`;
const codeBlock2 = `arr.forEach(x => console.log(x));`;
function makeArray(){
    for(let i = 0; i < codeBlock1.length; i++){
        finalCode.push(codeBlock1.charCodeAt(i));
    }
    finalCode.push(10);
    for(let i = 0; i < codeBlock2.length; i++){
        finalCode.push(codeBlock2.charCodeAt(i));
    }
}
makeArray();
//generate buffer with code
console.log('hello');
let blankBuffer = Buffer.from('                                                                                                                                                                         ');
let codeBuffer = buffer => {
    for(let j = 0; j < finalCode.length; j++){
        buffer[j] = finalCode[j];
    }
}
//needs a promise
codeBuffer(blankBuffer);
//

fs.writeFileSync('./files/loops.js', blankBuffer);