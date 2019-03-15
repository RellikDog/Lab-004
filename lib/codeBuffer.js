'use strict';

module.exports = (buffer, final) => {
    for(let j = 0; j < final.length; j++){
        buffer[j] = final[j];
    }
    return buffer;
};