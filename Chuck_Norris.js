//Condition:
//Binary with 0 and 1 is good, but binary with only 0, or almost, is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.
//
// Write a program that takes an incoming message as input and displays as output the message encoded using Chuck Norris’ method.
//
//  	Rules
//
// Here is the encoding principle:
//
// The input message consists of ASCII characters (7-bit)
// The encoded output message consists of blocks of 0
// A block is separated from another block by a space
// Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
// - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
// - Second block: the number of 0 in this block is the number of bits in the series
//  	Example
//
// Let’s take a simple example with a message which consists of only one character: Capital C. C in binary is represented as 1000011, so with Chuck Norris’ technique this gives:
//
// 0 0 (the first series consists of only a single 1)
// 00 0000 (the second series consists of four 0)
// 0 00 (the third consists of two 1)
// So C is coded as: 0 0 00 0000 0 00
//
//
// Second example, we want to encode the message CC (i.e. the 14 bits 10000111000011) :
//
// 0 0 (one single 1)
// 00 0000 (four 0)
// 0 000 (three 1)
// 00 0000 (four 0)
// 0 00 (two 1)
// So CC is coded as: 0 0 00 0000 0 000 00 0000 0 00
//
//  	Game Input
//
// Input
// Line 1: the message consisting of N ASCII characters (without carriage return)
// Output
// The encoded message
// Constraints
// 0 < N < 100

// Example
// Input:
// 'C'

// Output
// 0 0 00 0000 0 00

//variant #1:
const MESSAGE = readline();
const str = [...MESSAGE].map(el => el.codePointAt().toString(2).padStart(7, 0)).join('')
const out = str.match(/0+|1+/g).map( el => el.includes('1') ? '0 ' + ''.padEnd(el.length, 0) : '00 ' + ''.padEnd(el.length, 0) ).join(' ')
    // equal ...match(/(\w)\1*/g)
console.log(out);


//variant #2:
var origMessage = readline();
var regex = /(\d)\1*/g;
var message = origMessage.split('').map(item => {
    var encoded = item.charCodeAt(0).toString(2);
    return '0'.repeat(7 - encoded.length) + encoded;
}).join('');

var encoded = message
.match(regex)
.reduce((acc, char) => acc + (char[0] === '0' ? '00 ' : '0 ') + '0'.repeat(char.length) + ' ', '');

print(encoded.trim());


//variant #3:
const text = readline();
const strNum = [...text].map(el => el.codePointAt().toString(2).padStart(7, 0)).join('')
console.log(
    strNum.replace( /(1*)(0*)/g, ( _, p1, p2 ) => `${p1 ? `0 ${'0'.repeat(p1.length)}` : ''} ${p2 ? `00 ${p2}` : ''} `).trim()
);


//variant #4:
print(
    readline()
    // split input into an array of separate characters
    .split('')
    // convert each character code to its binary representation
    .map(c => c.charCodeAt(0).toString(2))
    // make all strings represent exactly 7 bits by adding leading 0's if necessary
    .map(s => '0'.repeat(7 - s.length) + s)
    // combine all strings into a single bit stream
    .join('')
    // split the bit stream into groups of 0's and 1's
    .match(/0+|1+/g)
    // encode each group by the given rules
    .map(s => ['00 ', '0 '][s[0]] + '0'.repeat(s.length) + ' ')
    // combine everything into a single string again
    .join('')
    // remove trailing space
    .trim()
);