//conditions:
//Casablanca’s hippodrome has grown tired of old-fashioned dual racing and has kicked it up a notch: they will now be organizing hyperduals.
//
// During a hyperdual, only two horses will participate in the race. In order for the race to be interesting, it is necessary to try to select two horses with similar strength.
//
// Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer.
//
// In a hyperdual, a horse's strength is a bidimensional (Velocity,Elegance) vector. The distance between two strengths (V1,E1) and (V2,E2) is abs(V2-V1)+abs(E2-E1).
//
// (This is a harder version of training puzzle “Horse-racing duals”. You may want to solve that problem first.)
// (To date there is no specific achievement if you solve this one in pure bash. Rest assured it *is* possible nonetheless!)
// Input
// Line 1: the number N of horses
// N following lines: the speed Vi and elegance Ei of each horse, space-separated
// Output
// Line 1: the distance D between the two closest strengths
// Constraints
// 10 ≤ N ≤ 600
// 0 ≤ Vi,Ei ≤ 10000000
// D ≥ 0
// All values are integral.

// Example:
// Input:
// 10
// 6850207 0
// 8707138 0
// 8028585 0
// 3635318 0
// 8612162 0
// 6854699 0
// 7106093 0
// 3721952 0
// 2670046 0
// 1746583 0

// Output:
// 4492



//variant #1:
const N = parseInt(readline());
const arr = new Array(N);

for (let i = 0; i < N; i++) {
    const [V, E] = readline().split(' ').map(Number);
    arr[i] = {V, E};
}

console.log(
    arr.reduce((acc, x) =>
        Math.min(acc, arr.reduce((acc, y) =>
                x === y ? acc : Math.min(acc, Math.abs(x.V - y.V) + Math.abs(x.E-y.E))
            , Infinity))
    , Infinity)
);



//variant #2:
var D = Infinity, horses = [], N = +readline()
for (let ii = 0; ii < N; ii++) {
    const [ Vi, Ei ] = readline().split(' ')
    for (const {Vj, Ej} of horses) {
        D = Math.min(D, Math.abs(Vj-Vi) + Math.abs(Ej-Ei))
    }
    horses.push({Vj: Vi, Ej: Ei})
}
console.log(D)



//variant #3:
const parseHorse = () => readline().split(' ').map(Number)
const n = parseInt(readline());
const horses = []

for(let i = 0; i < n; i++) {
    horses.push( parseHorse() )
}

let min = Infinity
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if (i !== j){
            const [ h1, h2 ] = [ horses[i], horses[j] ]
            const v = Math.abs(h1[0] - h2[0]) + Math.abs(h1[1] - h2[1])
            min = Math.min(min, v)
        }
    }
}
console.log(min)



//variant #4:
class Vector {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    distance(v2) {
        return Math.abs(v2.a - this.a) + Math.abs(v2.b - this.b);
    }

}

const N = parseInt(readline());
const horses = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const V = parseInt(inputs[0]);
    const E = parseInt(inputs[1]);
    horses.push(new Vector(V, E));
}

const distances = [];
for (let k = 0; k <= horses.length; k += 1) {
    for (let j = k + 1; j < horses.length; j += 1) {
        distances.push(horses[k].distance(horses[j]))
    }
}

console.log(distances.reduce((acc, d) => acc > d ? d : acc))



//variant #5:
const n = parseInt(readline());

let v = [];
let e = [];

for (let i = 0; i < n; i++) {
    let inputs = readline().split(' ');
    v.push(parseInt(inputs[0]));
    e.push(parseInt(inputs[1]));
}

let min = -1;

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        let dist = Math.abs(v[i] - v[j]) + Math.abs(e[i] - e[j]);
        if ((min === -1) || (dist < min)) {
            min = dist;
        }
    }
}

console.log(min);



//variant #6:
console.log([...Array(+readline())]
.map(_ => readline().split(' ').map(Number))
.map((c1, i1, a) => a.reduce((p, c2, i2) => i1 === i2 ? p : Math.min(p, Math.abs(c2[0] - c1[0]) + Math.abs(c2[1] - c1[1])), Infinity))
.reduce((p, c) => Math.min(p, c), Infinity));