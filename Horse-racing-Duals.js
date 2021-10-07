// conditions:
// Casablanca’s hippodrome is organizing a new type of horse racing: duals. During a dual, only two horses will participate in the race. In order for the race to be interesting, it is necessary to try to select two horses with similar strength.
//
// Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer (≥ 0).
//  	Game Input
//
// Input
// Line 1: Number N of horses
//
// The N following lines: the strength Pi of each horse. Pi is an integer.
//
// Output
// The difference D between the two closest strengths. D is an integer greater than or equal to 0.
// Constraints
// 1 < N  < 100000
// 0 < Pi ≤ 10000000

// Example

// Input:
// 3
// 5
// 8
// 9

// Output:
// 1


//variant #1:
const N = parseInt(readline());
const arrHorses = [];

for (let i = 0; i < N; i++) {
    arrHorses.push( parseInt(readline()) )
}

arrHorses.sort((a, b)=> b - a);
let lessDifference = Infinity;

for (let i = 1; i < N; i++){
    const difference = Math.min(arrHorses[i-1] - arrHorses[i]);
    lessDifference = Math.min(lessDifference, difference)
}

console.log(lessDifference)


