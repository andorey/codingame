//conditions:
// A gang of R foolish robbers decides to heist a bank. In the bank there are V vaults (indexed from 0 to V - 1). The robbers have managed to extract some information from the bank's director:
// - The combination of a vault is composed of C characters (digits/vowels).
// - The first N characters consist of digits from 0 to 9.
// - The remaining characters consist of vowels (A, E, I, O, U).
// - C and N may be the same or different for different vaults.
//
// All the robbers work at the same time. A robber can work on one vault at a time, and a vault can be worked on by only one robber. Robbers deal with the different vaults in increasing order.
//
// A robber tries the combinations at the speed of 1 combination per second. He tries all the possible combinations, i.e. he continues to try the untried combinations even after he has found the correct combination. Once he finishes one vault, he moves on to the next available vault, that is the vault with the smallest index among all the vaults that have not been worked on yet. The heist is finished when the robbers have worked on all the vaults.
//
// Assume it takes no time to move from one vault to another.
//
// You have to output the total time the heist takes.
// Input
// Line 1: An integer R for the number of robbers.
// Line 2: An integer V for the number of vaults.
// Next V lines: For each vault, one line of two space-separated integers C and N for the total number of characters (C) and the total number of digits (N) in the vault's combination. The vaults are ordered by their index.
// Output
// Line 1: An integer for the total time the heist takes in seconds.
// Constraints
// 1 ≤ R ≤ 5
// 1 ≤ V ≤ 20
// 3 ≤ C ≤ 8
// 0 ≤ N ≤ C

// Example:
// Input:
// 1
// 1
// 3 1

// Output:
// 250


// Please do not ask me: "Why?"
//variant #1:
const R = parseInt(readline());
const V = parseInt(readline());
const r = Array(R).fill(0)

for (let i = 0; i < V; i++) {
    const inputs = readline().split(' ');
    const C = parseInt(inputs[0]);
    const N = parseInt(inputs[1]);
    const t = 10**N * 5**(C-N);
    r.sort((a,b)=>a-b);
    r[0] += t
}
console.log(Math.max(...r));




//variant #2:
let r = readline;
let R = Array(parseInt(r())).fill(0);
let V = Array(parseInt(r())).fill().map(x => r().split(' ').slice(0, 2).map(y => parseInt(y)));
V.map(x => Math.pow(10, x[1]) * Math.pow(5, x[0] - x[1])).map(t => {
    R[0] += t;
    R = R.sort((a, b) => a - b);
});
console.log(Math.max(...R));



//variant #3:
const [R, V] = [+readline(), +readline()];
const robbers = Array(R).fill(0);

for (let i = 0; i < V; i++) {
    let [C, N] = readline().split(' ');
    let time = 10**N * 5**(C - N);
    robbers[0] += time;
    robbers.sort((a, b) => a - b);
}

console.log(Math.max(...robbers));