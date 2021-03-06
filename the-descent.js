//conditions:
//  	The Goal
//
// Destroy the mountains before your starship collides with one of them. For that, shoot the highest mountain on your path.
//  	Rules
//
// At the start of each game turn, you are given the height of the 8 mountains from left to right.
// By the end of the game turn, you must fire on the highest mountain by outputting its index (from 0 to 7).
//
// Firing on a mountain will only destroy part of it, reducing its height. Your ship descends after each pass.
//
// Victory Conditions
// You win if you destroy every mountain
//
// Lose Conditions
// Your ship crashes into a mountain
// You provide incorrect output or your program times out
//  	Note
//
// Don’t forget to run the tests by launching them from the “Test cases” window. The tests provided and the validators used to calculate your score are slightly different to avoid hard-coded solutions.
//  	Game Input
//
// Within an infinite loop, read the heights of the mountains from the standard input and print to the standard output the index of the mountain to shoot.
// Input for one game turn
// 8 lines: one integer mountainH per line. Each represents the height of one mountain given in the order of their index (from 0 to 7).
// Output for one game turn
// A single line with one integer for the index of which mountain to shoot.
// Constraints
// 0 ≤ mountainH ≤ 9
// Response time per turn ≤ 100ms



//variant #1:
while ( true ){
    let arr = [...Array(8)].map(el => +readline())
    console.log( arr.indexOf( Math.max(...arr) ) )
}



//variant #2:
while (true){
    console.log([...Array(8)]
    .map(n => parseInt(readline()))
    .reduce((p, c, i, a) => c > a[p] ? i : p, 0));
}



//variant #3:
let read = () => Array(8).fill().map((_,i) => [readline(), i])

while (true) {
    const mountains = read()
    const highestPointIdx = mountains.sort().pop().pop()
    console.log(highestPointIdx)
}



//variant #4:
while (true) {
    let max = -0;
    let result = -0;

    for ( let i = 0; i < 8; i++){
        const mountainH = +readline();
        if ( mountainH >= max ){
            max = mountainH;
            result = i;
        }
    }
    console.log(result);
}



//variant #5:
while ( true ) {
    let a = [];
    for ( let i = 0; i < 8; i++ ) {
        let mountainH = parseInt(readline());
        a.push({h:mountainH, i:i});
    }

    a.sort( (a, b)=> b.h - a.h );
    console.log(a[0].i);
}