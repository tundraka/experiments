'use strict';

let total = 0;

for (let i = 0; i < 1000; i ++) {
    if (i % 3 === 0 || i % 5 ===0) {
        total += i;
    }
}

console.log(`Sum of number multiples of 1, 3 from 1...1000=${total}`);
