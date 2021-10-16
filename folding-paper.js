//conditions:
//A sheet of paper is folded several times. The goal is to determine how many layers of paper are visible from one side of the obtained folding.
//
// Folding motions are:
// R for Right: take the right side and fold it on the left side.
// L for Left: take the left side and fold it on the right side.
// U for Up: take the high side and fold it on the low side.
// D for Down: take the low side and fold it on the high side.
// Input
// Line 1: a fold string order: several letters R, L, U and D with no space in-between
// Line 2: side: a single character R, L, U or D
// Output
// n: the number of layers of paper visible from side
// Constraints
// 2 characters ≤ length of order ≤ 8 characters
// (Try to fold a sheet more than 6 times!)

// Example:
// Input:
// UL
// D

// Output:
// 4


//variant #1:
const order = readline();
const side = readline();
const dic = { R: 1, L: 1, U: 1, D: 1}

const add = x => {
    switch(x){
        case 'L':
            dic.R += dic.L;
            dic.L = 1;
            dic.U *= 2;
            dic.D *= 2;
            break;
        case 'R':
            dic.L += dic.R;
            dic.R = 1
            dic.U *= 2;
            dic.D *= 2;
            break;
        case 'D':
            dic.U += dic.D;
            dic.D = 1;
            dic.L *= 2;
            dic.R *= 2;
            break;
        case 'U':
            dic.D += dic.U;
            dic.U = 1;
            dic.L *= 2;
            dic.R *= 2;
            break;
    }
}
[...order].map(e => add(e))
console.log(dic[side])



//variant #2:
let str = 'URDL';
let sides = Array(4).fill(1);
[...readline()].map(el => str.indexOf(el)).forEach(index => {
    sides[(index + 1) % 4] *= 2;
    sides[(index + 2) % 4] += sides[index];
    sides[(index + 3) % 4] *= 2;
    sides[index] = 1;
});
console.log(sides[str.indexOf(readline())]);



//variant #3:
const r = readline;
let o = r().split``;
let s = r();
let dict={};

dict.U = 1;
dict.D = 1;
dict.L = 1;
dict.R = 1;

o.map(v=>{
    if(v === "U") dict.L *= 2, dict.R *= 2, dict.D += dict.U, dict.U=1;
    if(v === "D") dict.L *= 2, dict.R *= 2, dict.U += dict.D, dict.D=1;
    if(v === "R") dict.U *= 2, dict.D *= 2, dict.L += dict.R, dict.R=1;
    if(v === "L") dict.U *= 2, dict.D *= 2, dict.R += dict.L, dict.L=1;
})
console.log( dict[s]);



//variant #4:
let order = readline(),
    side = readline(),
    sides = { R:1, L:1, U:1, D:1 };

order.split('').map(m => {
    ['R','L','U','D'].map( s => {
        if ( s != m )
            sides[ s ] += sides[
                m.match(/R|L/) && s.match(/D|U/) ||
                m.match(/D|U/) && s.match(/R|L/)
                    ? s
                    : m
                ]
    } );
    sides[ m ] = 1;
} );

console.log( sides[side] );



//variant #5:
var order = readline();
var side = readline();

var xs = [1, 1, 1, 1]
var m = {'L': 0, 'U': 1, 'R': 2, 'D': 3}
order.split('').forEach( (c) => {
    xs[ (m[c]+2)%4 ] += xs[m[c]]
    xs[ m[c]       ] = 1
    xs[ (m[c]+1)%4 ] *= 2
    xs[ (m[c]+3)%4 ] *= 2
})

console.log(xs[m[side]])



//variant #6:
const [order, side] = [readline().split(''), readline()];
const p = {U:1, D:1, R:1, L:1}, opp = { U :'D', D: 'U', R: 'L', L: 'R' }
const fold = (f) => {
    let h = p[f], o = opp[f];
    ['U','D','R','L'].forEach( v => {
        if (v != f) {
            if (v != o) p[v] *=2;
            else p[v] += h;
        }
        else  p[v]=1;
    } )
    return p;
}
order.forEach(s => fold(s))
console.log(p[side]);



//variant #7:
let debug = printErr;

let order = readline().split``;
let side = readline();

let paper = {
    'R' : 1,
    'L' : 1,
    'U' : 1,
    'D' : 1
};

let map = {
    'R' : [ 'R', 'L', 'U', 'D' ],
    'L' : [ 'L', 'R', 'U', 'D' ],
    'U' : [ 'U', 'D', 'L', 'R' ],
    'D' : [ 'D', 'U', 'L', 'R' ]
};

for (let s of order) {
    let [a,b,c,d] = map[s];

    paper[b] += paper[a];
    paper[a]  = 1;
    paper[c] += paper[c];
    paper[d] += paper[d];
}

console.log(paper[side]);



//variant #8:
const order = [...readline()];

let paper = [];
paper["U"] = {v: 1, op: "D"};
paper["D"] = {v: 1, op: "U"};
paper["L"] = {v: 1, op: "R"};
paper["R"] = {v: 1, op: "L"};

order.forEach(f => {
    [..."RLDU".replace(f, "")].forEach(p => paper[p].v += paper[p == paper[f].op ? f : p].v);
    paper[f].v = 1;
});
console.log(paper[readline()].v);



//variant #9:
l=readline,f=_=>"DRUL".search(_)
l(X=[1,1,1,1]).split``.map(a=>{X[c='2301'[y=f(a)]]+=X[y],X[3-c]*=2,X[3-y]*=2,X[y]=1})
print(X[f(l())])



//variant #10:
const fold = (c, p) =>
    c === 'L' ? { L: 1, R: p.L + p.R, U: 2 * p.U, D: 2 * p.D } :
        c === 'R' ? { L: p.L + p.R, R: 1, U: 2 * p.U, D: 2 * p.D } :
            c === 'U' ? { L: 2 * p.L, R: 2 * p.R, U: 1, D: p.U + p.D } :
                { L: 2 * p.L, R: 2 * p.R, U: p.U + p.D, D: 1 };

console.log(readline().split('').reduce((p, c) => fold(c, p), {L: 1, R: 1, U: 1, D: 1})[readline()]);