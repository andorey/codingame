//conditions:
// You have a hobby of visiting a porcupine farm. Porcupines are kept in cages and regularly fed. They are usually healthy and have been one of the rodents with longest lifespans, but some of these porcupines are sick.
//
// Every year, each porcupines who were sick last year will cause 2 healthy porcupines in the same cage to be sick, and then die.
//
// Simulate to find the total amount of surviving porcupines after every year. Stop if all the porcupines are dead (do not repeat "0"s after the first time).
// Input
// Line 1: Integer N, the amount of cages.
// Line 2: Integer Y, the number of years.
// Next N lines: Three space-separated integers S, H and A, the amounts of sick, healthy and alive porcupines in the cage respectively.
// Output
// Y or fewer lines of integers of porcupines alive.
// Line 1 is year 1, not year 0. Any sick porcupines die first.
// Constraints
// 0 ≤ N < 500
// 0 < Y < 100
// 0 ≤ S, H, A < 10,000,000
// S + H is A

// Example:
// Input:
// 2
// 3
// 2 118 120
// 0 50 50

// Output:
// 168
// 164
// 156



//variant #1:
const N = parseInt(readline());
const Y = parseInt(readline());
const dic = {};

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ').map(Number);
    const S = inputs[0];
    const H = inputs[1];
    const A = inputs[2];
    dic[i] = {}
    dic[i].S = S
    dic[i].H = H
    dic[i].A = A
}

let yearH = 0;

for (let i = 0; i < Y; i++) {
    yearH = 0;
    for (let j = 0; j < N; j++){
        yearH += dic[j].H
        dic[j].H -= dic[j].S * 2;
        if(dic[j].H < 0) dic[j].H = 0
        dic[j].A -= dic[j].S;
        if(dic[j].A < 0) dic[j].A = 0
        dic[j].S = dic[j].A - dic[j].H;
    }
    console.log( yearH )
    if(yearH === 0) break;
}