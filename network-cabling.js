//conditions:
//An internet operator plans to connect a business park to the optical fiber network. The area to be covered is large and the operator is asking you to write a program that will calculate the minimum length of optical fiber cable required to connect all buildings.
//  	Rules
//
// For the implementation of the works, the operator has technical constraints whereby it is forced to proceed in the following manner:
// A main cable will cross through the park from the West to the East (from the position x of the most westerly building to the position x of the most easterly building).
//
// For each building, a dedicated cable will connect from the building to the main cable by a minimal path (North or South), as shown in the following example:
//
// 	In this example, the green lines represent the cables.
//
// The minimum length will therefore depend on the position of the main cable.
//
//  	Game Input
//
// Input
// Line 1: The number N of buildings that need to be connected to the optical fiber network
//
// On the N following lines: The coordinates x and y of the buildings
//
// Output
// The minimum length L of cable required to connect all of the buildings. In other words, the length of the main cable plus the length of the cables dedicated to all the buildings.
//
// Note: the buildings with the same position x should not in any case share the same dedicated cable.
// Constraints
// 0 < N ≤ 100000
// 0 ≤ L ≤ 263
// -230 ≤ x ≤ 230
// -230 ≤ y ≤ 230

// Example 1:
// Input:
// 3
// 0 0
// 1 1
// 2 2

// Output:
// 4

// Example 2:
// Input:
// 3
// 1 2
// 0 0
// 2 2

// Output:
// 4



//variant #1:
const N = parseInt(readline());
const X = [], Y = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ').map(Number);
    X.push(parseInt( inputs[0]) );
    Y.push( parseInt(inputs[1]) );
}

const middleX = Math.max(...X) - Math.min(...X);
Y.sort( (a, b) => b - a);

console.log(
    middleX + Y.reduce(
        (acc, el) => acc + Math.abs( el - Y[~~(Y.length/2)] )
        , 0)
)



//variant #2:
var N=parseInt(readline()),x_min=200000,x_max=0,Y=[];
for(var i=0;i<N;++i){
    var [x,y]=readline().split(' ').map(e=>parseInt(e));
    x_min=Math.min(x_min,x);
    x_max=Math.max(x_max,x);
    Y[i]=y;
}
Y.sort((a,b)=>a>b);
var median=Y[Math.floor(N/2)],L=0;
for(var i=0;i<N;++i){
    L+=Math.abs(median-Y[i]);
}
console.log(L+x_max-x_min);



//variant #3:
const coors = new Array(parseInt(readline())).fill(0)
.map(() => readline().split(' ').map(Number));
const X = coors.map(c => c[0]).sort((a, b) => a - b);
const Y = coors.map(c => c[1]).sort((a, b) => a - b);
const median = Y[Y.length >> 1];

console.log(Y.reduce((l, y) => l + Math.abs(y - median), X[X.length - 1] - X[0]));



//variant #4:
let minX = Infinity;
let maxX = -Infinity;

const ys = new Array(parseInt(readline())).fill(0).map(() => {
    const [x,y] = readline().split(' ').map(Number);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    return y;
});

ys.sort((a, b) => a - b);
median = ys[Math.floor(ys.length / 2)];

console.log(ys.reduce((s, y) => s + Math.abs(y - median), maxX - minX));



//variant #5:
const coodinates = [...Array(+readline())].map(() => readline().split` `.map(Number));
const xs = coodinates.map(c => c[0]);
const ys = coodinates.map(c => c[1]).sort((a, b) => a - b);

console.log(
    Math.max(...xs) - Math.min(...xs) + ys.reduce(
        (l,c) => l + Math.abs(c - ys[ys.length / 2 | 0]), 0
    )
);