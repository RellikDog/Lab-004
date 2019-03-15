'use strict';
const makeArray = require('./../lib/makeArray');
const codeBuffer = require('./../lib/codeBuffer');

describe('testing makeArray', () => {
    test('make bassic array', () => {
        let z = [];
        let x = 'abc';
        let y = 'def';
        expect(makeArray(x, y, z)).toEqual([ 97, 98, 99, 10, 100, 101, 102 ]);
    });
});
describe('testing configure buffer', () => {
    test('basic', () => {
        let testArr = [100];
        let testBuffer = Buffer.from(' ');
        let newBuffer = codeBuffer(testBuffer, testArr);
        expect(newBuffer[0]).toEqual(100);
    });
});