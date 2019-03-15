'use strict';

module.exports = (CB1, CB2, final) => {
    for(let i = 0; i < CB1.length; i++){
        final.push(CB1.charCodeAt(i));
    }
    final.push(10);
    for(let i = 0; i < CB2.length; i++){
        final.push(CB2.charCodeAt(i));
    }
    return final;
};