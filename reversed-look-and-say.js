//conditions:
//Given an element of the Look-and-say series, you must walk the series in the reverse direction until you find the first valid element of the series.
//
// The Look-and-say series transforms a given number by changing a "spoken" interpretation of that number into a numerical format. The spoken interpretation of a number takes groups of digits and states the count of repeated digits in each group.
//
// 13112221 =>
//     1  3  11  222  1 =>
//         "One 1, one 3, two 1s, three 2s, one 1" =>
//             11  13  21  32  11 =>
//                 1113213211
//
//
// Given the above example of the Look-and-say series, if you were given "1113213211" as an input, the first step in walking the series in reverse would yield "13112221". Be careful after each iteration because the process is not always reversible...
//
//
// For example:
//
//
// 1211 =>
//     1 x "2" + 1 x "1" = 21 =>
//         2 x "1" = 11 =>
//             1 x "1" = 1. This is the last possible step
//
//
//
// 41 =>
//     4 x "1" = 1111 =>
//         1 x "1" + 1 x "1" = 11. This step is not reversible!
//
// The solution is 1111
//
//
//
// You can find detailed information of this sequence in https://en.wikipedia.org/wiki/Look-and-say_sequence.
// Input
// Line 1: An integer n for the starting element of the series.
// Output
// Line 1 : The very first valid element of the look-and-say series.
// Constraints
// Log(n) < 100

// Example:
// Input:
// 1211

// Output:
// 1


//variant #1:
const s = readline();

const lookSay = s => s.replace(/(.)\1*/g, (x, i) => x.length.toString() + i)

function sayLook( str ){
    let arr = str.match(/.{2}/g);
    let out = '';
    for( let i of arr ){
        let num = i[1]
        for (let j = 0; j < Number(i[0]); j++ ){
            out += num
        }
    }
    return out
}

function say(s){
    let afterLookSay = s.toString();
    let afterSayLook = sayLook(s.toString());

    while ( afterLookSay === lookSay(afterSayLook) ){
        afterLookSay = afterSayLook;

        if (afterLookSay.length < 2){
            return afterLookSay
        }

        afterSayLook = sayLook(afterSayLook);

        if(afterLookSay === afterSayLook){
            return afterLookSay
        }
    }
    return afterLookSay
}

console.log(say(s))



//variant #2:
let s = readline();

function valid(str) {
    return (str.length % 2 == 0) && !(str.match(/^(?:.{2})*\d(\d)\d\1/));
}

while(valid(s)) {
    let ret = "";
    for(let i = 0; i < s.length; i += 2)
    {
        let chunk = s.slice(i, i + 2);
        ret += chunk[1].repeat(parseInt(chunk[0]));
    }

    if(s == ret) break;
    s = ret;
}

console.log(s);



//variant #3:
let s = readline();
while (s.length % 2 < 1 && !s.match(/(\d)\1{3}/) && (groups = s.match(/\d\d/g))) {
    const next = groups.map(g => g[1].repeat(+g[0])).join('');
    if (next === s) break;
    s = next;
}
console.log(s);



//variant #4:
const s = readline();

const reverse = (s) => {
    console.error(s)
    let ns = '', lastWhat = ''
    for (let i=0; i<s.length-1; i+=2){
        let how = s[i], what= s[i+1]
        if (lastWhat == what) return s;
        ns += what.repeat(+how)
        lastWhat = what
    }
    if (ns == s || ns.length%2 == 1) return ns
    return reverse(ns)
}

console.log(reverse(s))



//variant #5:
let s = [...readline()];
let res = s.join("")
let nextRes = ""
while(true) {
    nextRes = compute([...res])
    if(nextRes === res) {
        break
    }
    if(reverse(nextRes) === res) {
        res = nextRes
    }
    else {
        break;
    }
}

function compute(s) {
    let res = ""
    while(s.length >= 2) {
        const count = s.shift()
        const digit = s.shift()
        res += Array(+count).fill(+digit).join("")
    }
    return res
}

function reverse(res) {
    let digit = res[0]
    let count = 1
    let result = ""
    if(res.length === 1) {
        return `${count}${digit}`
    }
    for(let i = 1; i < res.length; i++) {
        if(digit === res[i]) {
            count++
        }
        else {
            result += `${count}${digit}`
            count = 1
            digit = res[i]
        }
        if(i === res.length -1) {
            result += `${count}${digit}`
        }
    }
    return result
}

console.log(res)