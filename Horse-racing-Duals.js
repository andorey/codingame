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



//variant #2:
var horses = new Array(parseInt(readline())).fill(1).map( x => +readline() ).sort((a, b) => a - b);

var differences = horses.slice(1).map((current,index,array)=> Math.abs(current-horses[index]));

console.log( Math.min( ...differences ) );



//variant #3:
const result = [...Array(+readline())]
.map(() => +readline())
.sort((a, b) => a - b)
.reduce((p, c, i, a) => {
    return c - a[i - 1] < p ? c - a[i - 1] : p;
});

console.log( result );



//variant #4:
console.log([...Array( +( r = readline )() )]
    .map( x => +r() )
    .sort(srt = (a, b) => a - b)      // "srt" assign function (a, b) => a - b
    .map( (x,i,a) => x - a[i - 1] )
    .sort(srt)[0]                     // we use this function "srt" again
);



//variant #5:
console.log([...Array(parseInt(readline()))]
    .map(() => parseInt(readline()))
    .sort((a, b) => a - b)
    .reduce((acc, str, idx, arr) => Math.min(acc, str - arr[idx - 1]))
)