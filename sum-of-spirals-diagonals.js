//conditions:
//Given a matrix of shape N×N arranged in a "spiral", with its numbers spiralling from 1 to N² inward, what is the sum of its diagonals? See examples to clarify what a spiral is.
//
// Example 1:
// The input: 3
// Gives the following spiral:
// 1     2     3
// 8     9     4
// 7     6     5
// The sum of the diagonals is:
// 1 + 3 + 5 + 7 + 9 = 25
//
//
// Example 2:
// The input: 4
// Gives the following spiral:
// 1    2      3     4
// 12   13    14     5
// 11   16    15     6
// 10   9      8     7
// The sum of the diagonals is:
// 1 + 4 + 7 + 10 + 13 + 14 + 15 + 16 = 80


//variant #1:
const n = parseInt(readline());
const sumSpiralDiag = n => (8*n*n*n + 4*n - (6*n*n - 3) * (n % 2) - 3*n*n) / 6
console.log( sumSpiralDiag( n ) )



//variant #2:
let n = parseInt(readline()),
    numbers = [n],
    x = n - 1;

while (x > 0) {
    const l = numbers.length;
    x = n - 1 - ~~(l / 4) * 2;
    numbers.push(numbers[l - 1] + x);
}

numbers.pop();
if (!(n%2)) numbers.pop();
numbers.push(1);

console.log(numbers.reduce((a,v) => a+v))



//variant #3:
const n = parseInt(readline())
console.error(n)
let sum = 1
let last = 1

for(i=n-1; i>1; i-=2){
    sum += 4*last + 10*i
    last += 4*i
}

if(n%2===0)
    sum+=(3*n*n)-3

console.log(sum)



//variant #4:
let n = parseInt(readline());
let s = 0, x = 0;
while (n > 1) {
    s += 6 * n - 2 + 4 * x;
    x += 4 * n - 4;
    n -= 2;
    if (n === 1)
    {
        s += x + 1;
        break;
    }
}
console.log(s);



//variant #5:
const n = parseInt(readline());

let sum = 1, current = 1, i=1, side = n+1   //1 is always present at a start,
                                            //current is the last seen number, i is the iteration
                                            //side is a spiral side which grades as n+1; n-1; n-3; etc. every 4 iterations
while(current < n**2){
    if( i % 4 === 1 ) side -= 2;
    current += side;
    sum+=current;
    i++;
}
console.log(sum);



//variant #6:
let n = +readline(), total = 1, counter = 1;
for (let i = n; i > 1; i -= 2) {
    total += 4 * counter + 10 * (i - 1);
    counter += 4 * (i - 1);
}
console.log(n % 2 ? total : total - counter);