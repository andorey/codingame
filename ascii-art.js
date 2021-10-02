//condition:
//In stations and airports you often see this type of screen:
//
// Have you ever asked yourself how it might be possible to simulate this display on a good old terminal? We have: with ASCII art!
//  	Rules
//
// ASCII art allows you to represent forms by using characters. To be precise, in our case, these forms are words. For example, the word "MANHATTAN" could be displayed as follows in ASCII art:
//
//
// # #  #  ### # #  #  ### ###  #  ###
// ### # # # # # # # #  #   #  # # # #
// ### ### # # ### ###  #   #  ### # #
// # # # # # # # # # #  #   #  # # # #
// # # # # # # # # # #  #   #  # # # #
//
// ​Your mission is to write a program that can display a line of text in ASCII art in a style you are given as input.
//
//  	Game Input
//
// Input
// Line 1: the width L of a letter represented in ASCII art. All letters are the same width.
//
// Line 2: the height H of a letter represented in ASCII art. All letters are the same height.
//
// Line 3: The line of text T, composed of N ASCII characters.
//
// Following lines: the string of characters ABCDEFGHIJKLMNOPQRSTUVWXYZ? Represented in ASCII art.
//
// Output
// The text T in ASCII art.
// The characters a to z are shown in ASCII art by their equivalent in upper case.
// The characters that are not in the intervals [a-z] or [A-Z] will be shown as a question mark in ASCII art.
// Constraints
// 0 < L < 30
// 0 < H < 30
// 0 < N < 200

// Example:
// Input:
// 4
// 5
// E
//  #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ###
// # # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   #
// ### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ##
// # # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #
// # # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #

// Output:
// ###
// #
// ##
// #
// ###

//variant #1:
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();
const arrASCII = [];
let display = [];

for (let i = 0; i < H; i++) {
    arrASCII.push( readline() );
}

for ( let k = 0; k < H; k++ ){
    let out = '';
    for ( let i of T ){
        let pos = i.codePointAt() - 65;

        if ( pos < 0 || 25 < pos ) pos = 26;

        for ( let j = pos * L; j < (pos * L + L); j++){
            out +=  arrASCII[k][j];
        }
    }
    display.push(out)
}

console.log( display.join('\n') )


//variant #2:
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();
const arrASCII = [];
let display = [];

for (let i = 0; i < H; i++) {
    arrASCII.push( readline() );
}

arrASCII.forEach( el => {
    let out = "";

    for (let i = 0; i < T.length; i++) {
        let pos = T[i].codePointAt() - 65; //the position of the character "A" in the alphabet

    if (pos < 0 || pos > 25){
        pos = 26; //case of value out of range limits
    }

    let col = pos * L; //the number of columns in the character

    for (let j = col; j < (col + L); j++){
        out += el[j];
    }
  }
  console.log(out);
});


//variant #3:
let L = parseInt(readline());
let H = parseInt(readline());
let T = readline().split('');
let asciiArt = [...Array(H)].map( readline );
let output = Array(H).fill("");

T.forEach(c => {
    let up = c.toUpperCase();
    let idx = L * (up < 'A' || up > 'Z' ? 26 : up.charCodeAt(0) - 'A'.charCodeAt(0));
    asciiArt.forEach((n, i) => output[i] += n.substring(idx, L + idx));
});
output.forEach( print );