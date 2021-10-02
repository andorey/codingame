//condition:
// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).
//  	Game Input
//
// Your program must read the data from the standard input and write the result on the standard output.
// Input
// Line 1: N, the number of temperatures to analyze
//
// Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526
//
// Output
// Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
// Constraints
// 0 ≤ N < 10000

// Example
// Input                    // Output:
// 5                        //
// 1 -2 -8 4 5              // 1

//variant #1
const n = parseInt(readline()); // amount of temperature data for analysis
const inputs = readline().split(' ').map(Number)
let out = 100000;
for (let i of inputs) {
    if (Math.abs(i) < Math.abs(out)){
        out = i
    }else if (Math.abs(i) === Math.abs(out)){
        out = Math.max(i, out)
    }
}
console.log(out);


//variant #2
let n = parseInt(readline());
let t = readline().split(' ');
console.log(t.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a)[0] || 0);