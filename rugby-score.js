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



