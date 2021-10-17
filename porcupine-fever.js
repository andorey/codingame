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



//variant #2:
let cage=[];
let alive=0;

let N = parseInt(readline());
let Y = parseInt(readline());
for (let i = 0; i < N; i++) {
    let inputs = readline().split(' ');
    let S = parseInt(inputs[0]);
    let H = parseInt(inputs[1]);
    let A = parseInt(inputs[2]);
    cage.push({sick: S, healthy: H, alive: A});
}

for(let i=0;i<Y;i++){
    for(let j=0; j<cage.length; j++){
        cage[j].alive-=cage[j].sick;
        cage[j].healthy-=cage[j].sick * 2;
        cage[j].sick=cage[j].sick * 2;
        if(cage[j].alive > 0){
            alive += cage[j].alive;
        }
    }
    if( alive === 0 ){
        console.log(0);
        break;
    }else{
        console.log( alive );
    }
    alive = 0;
}



//variant #3:
const N = parseInt(readline());
const Y = parseInt(readline());
var cages = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const S = parseInt(inputs[0]);
    const H = parseInt(inputs[1]);
    const A = parseInt(inputs[2]);
    cages.push([S, H, A]);
}
for (let i = 0; i < Y; i++) {
    var total = 0;
    for (var c in cages) {
        if (cages[c][1] - 2 * cages[c][0] < 0) {
            if (cages[c][1] > 0) {
                cages[c][0] = cages[c][1];
                cages[c][1] = 0;
            } else {
                cages[c][0] = 0;
            }
        } else {
            cages[c][1] -= 2 * cages[c][0];
            cages[c][0] *= 2;
        }
        cages[c][2] = cages[c][0] + cages[c][1];
        total += cages[c][2];
    }
    console.log(total);
    if (total === 0) {
        break;
    }
}



//variant #4:
l = readline
Y = +l(C = +l(t = 1))
for(p=[...Array(C)].map(_=>l().split` `); t&&Y--; p=p.map(x=>[y=x[0]*2,(p=x[1]-y)< 0 ? 0 : p]))
    console.log(t=p.reduce((a,b)=>+b[1]+a,0))



//variant #5:
const [C, Y] = [+readline(), +readline()];
const cages = [...Array(C)].map(_ => readline().split(' ')).map(s => ({ sick: +s[0], healthy: +s[1], alive: +s[2] }));

for (let y = 0; y < Y; y++) {
    cages.filter(cage => cage.alive > 0).forEach(cage => {
        cage.alive -= cage.sick;
        cage.sick = Math.min(2 * cage.sick, cage.healthy);
        cage.healthy -= cage.sick;
    });
    const total = cages.reduce((p, c) => p + c.alive, 0);
    console.log(total);
    if (total < 1) break;
}



//variant #6:
class Cage {
    static parse(text) {
        let [sick, healthy] = text.split(' ').map(x => parseInt(x));
        return new Cage(healthy, sick);
    }

    constructor(healthy, sick) {
        this.healthy = healthy;
        this.sick = sick;
    }

    step() {
        this.sick = Math.min(this.healthy, 2 * this.sick);
        this.healthy -= this.sick;
    }

    total() {
        return this.healthy + this.sick;
    }
}

const CAGES = parseInt(readline());
const YEARS = parseInt(readline());

let cages = Array(CAGES).fill().map(() => readline()).map(Cage.parse);
for (let y = 1; y <= YEARS; y++) {
    cages.forEach(cage => cage.step());

    let total = cages.map(cage => cage.total()).reduce((a, b) => a + b, 0);
    print(total);
    if (total == 0) {
        break;
    }
}



//variant #7:
let cages = []

const N = parseInt(readline());
const Y = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const S = parseInt(inputs[0]);
    const H = parseInt(inputs[1]);
    const A = parseInt(inputs[2]);
    cages.push({S,H})
}

for (let i = 0; i < Y; i++) {
    let alivePorcupines = 0;
    cages.forEach((cage, index) => {
        const newlySick = cage.S * 2;
        cages[index] = { S: newlySick, H: Math.max(cage.H - newlySick, 0) }
        alivePorcupines += cage.H
    });
    console.log(alivePorcupines);
    if (!alivePorcupines) break;
}