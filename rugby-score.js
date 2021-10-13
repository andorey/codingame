//conditions:
//Given a rugby score, your program must compute the different scoring combinations that lead to that particular score.
// As a reminder:
// - a try is worth 5 points
// - after a try, a transformation kick is played and is worth 2 extra points if successful
// - penalty kicks and drops are worth 3 points
// Input
// Line 1: the score
// Output
// N lines: number of tries, number of transformations, number of penalties / drops, separated by spaces
// The combinations must be ordered by increasing order of tries, then transformations, then penalties/drops
// Constraints
// No impossible scores are given, there is always at least one valid combination.

// Example:
// Input
// 12

// Output
// 0 0 4
// 2 1 0


//variant #1:
const N = parseInt(readline());

for(let t = 0; t * 5 <= N; t++){
    let rem = ( N - t * 5 ) % 3;
    let t2;
    if(rem === 0) t2 = 0;
    if(rem === 1) t2 = 2;
    if(rem === 2) t2 = 1;
    for(; t2 * 2 + t*5 <= N && t2 <= t; t2 += 3 )
        console.log( t + ' ' + t2 + ' ' +( N - 2*t2 - 5*t) / 3 );
}



//variant #2:
const score = parseInt(readline());

let essai= 0
let trans = 0
let penalty = score - (essai * 5 + trans *2 )

const checkInUp = (p) =>{
    p= score - (essai * 5 + trans *2 )
    if(p % 3 ===0 && p >=0){
        return console.log(essai, trans, p /3)
    }
}
checkInUp(penalty)
while(essai * 5 < score){
    essai ++
    trans = 0
    checkInUp(penalty)
    for(let i = 0; i < essai; i ++){
        trans ++
        checkInUp(penalty)
    }
}



//variant #3:
const N = Number(readline());

for (let tries = 0; 5 * tries <= N; ++tries) {
    for (let kicks = 0; kicks <= tries; ++kicks) {
        const penalties = (N - 5 * tries - 2 * kicks) / 3;
        if (penalties >= 0 && Number.isInteger(penalties))
            console.log(tries, kicks, penalties);
    }
}



//variant #4:
let solvePenalties = (n) => n % 3 === 0 ? n / 3 : -1;

let solveTransformations = (n, m) => [...Array(m + 1)]
.map((_, i) => [i, solvePenalties(n - 2 * i)])
.filter(r => r[1] >= 0);

let solveTries = (n) => [...Array(1 + Math.floor(n / 5))]
.map((_, i) => solveTransformations(n - 5 * i, i).map(r => [i, r[0], r[1]]));

console.log(solveTries(+readline()).flat().map(r => `${r[0]} ${r[1]} ${r[2]}`).join('\n'));



//variant #5:
const N = +readline();

for (let tries = 0; tries * 5 <= N; tries++) {
    for (let kicks = 0; kicks * 2 + tries * 5 <= N && kicks <= tries; kicks++) {
        if ((N - tries * 5 - kicks * 2) % 3 === 0) {
            console.log(tries, kicks, (N - tries * 5 - kicks * 2) / 3);
        }
    }
}



//variant #6:
for(N = readline()|0, a=0; 5*a <= N; a++){
    for(b=0; b <= a && 5*a + 2*b <= N; b++){
        if( c = (N - 5*a - 2*b)/3, c === (c|0) ) console.log([a,b,c].join(' '))
    }
}



//variant #7:
const N = parseInt(readline());

for (let i = 0; i <= N / 5; i++) {
    for (let j = 0; j <= i; j++) {
        for (let k = 0; k <= N / 3; k++) {
            if (i * 5 + j * 2 + k * 3 === N) console.log([i, j, k].join(' '))
        }
    }
}