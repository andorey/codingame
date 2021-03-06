//conditions:
//A finance company is carrying out a study on the worst stock investments and would like to acquire a program to do so. The program must be able to analyze a chronological series of stock values in order to show the largest loss that it is possible to make by buying a share at a given time t0 and by selling it at a later date t1. The loss will be expressed as the difference in value between t0 and t1. If there is no loss, the loss will be worth 0.
//  	Game Input
//
// Input
// Line 1: the number n of stock values available.
//
// Line 2: the stock values arranged in order, from the date of their introduction on the stock market v1 until the last known value vn. The values are integers.
//
// Output
// The maximal loss p, expressed negatively if there is a loss, otherwise 0.
// Constraints
// 0 < n < 100000
// 0 < v < 231
// Examples:

// Input:
// 6
// 3 2 4 2 1 5
// Output:
// -3

// Input:
// 6
// 5 3 4 2 3 1
// Output:
// -4

// Input:
// 5
// 1 2 4 4 5
// Output:
// 0


//variant #1:
const n = parseInt(readline());
let inputs = readline().split(' ').map(Number);
let value = inputs[0];
let out = 0;

for (let i =1; i < n; i++) {
    if (value < inputs[i]){
        value = inputs[i]
    }else{
        out = Math.max(out , value - inputs[i])
    }
}

console.log( out ? out * -1 : 0 )



//variant #2:
(z = readline)(m = n = 0)
z().split(' ').map(v => +v).map(v => v > m ? m = v : n = Math.max(n, m-v))
sonsole.log(-n)


//variant #3:
const n = parseInt(readline());
var inputs = readline().split(' ').map((value) => { return parseInt(value); }),
    maxValue = 0,
    cntDelta = 0;

/* SLOW METHOD
for (var i = 0; i < n; i++) {

    for (var j = i + 1; j < n; j++) {

        var value = inputs[j] - inputs[i];
        if (value < maxValue) { maxValue = value; }

    }

}
*/

for (var i = 0; i < n; i++) {
    var value = inputs[i];
    maxValue = (maxValue > value) ? maxValue : value;
    cntDelta = (cntDelta < value - maxValue) ? cntDelta : value - maxValue;
}

console.log(cntDelta);



//variant #4:
readline();
var peak = 0, loss = 0;
for (var data of readline().split(' ')) {
    loss = Math.min(loss, data - peak);
    peak = Math.max(peak, data);
}
console.log(loss);