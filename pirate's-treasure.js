//conditions:
// The goal of this puzzle is to find a pirate's treasure. The pirate surrounded his treasure by obstacles.
// Input
// Line 1: Width W of the treasure arr.
// Line 2: Height H of the treasure arr.
// Next H lines: W symbols (0 or 1) indicating free space (0) or obstacle (1).
//
// Treasure is placed on free space surrounded by only obstacles.
//
// There are three possible ways in which the treasure can be surrounded:
// By 3 obstacles when the treasure is in the corner of the arr.
// By 5 obstacles when the treasure is on the edge of the arr.
// By 8 obstacles when the treasure is inside the arr.
// Output
// The coordinates of the treasure on the arr are represented by indices separated by a space. For example: "12 5"
//
// Position "0 0" is in the top left corner, so the maximum index x is W-1 and the maximum index y is H-1.
// Constraints
// * 2 <= W <= 25
// * 2 <= H <= 25
// * Only 1 treasure in arr.

// Example:
// Input:
// 2
// 2
// 0 1
// 1 1

// Output:
// 0 0



//variant #1:
const W = parseInt(readline());
const H = parseInt(readline());
let  arr = new Array(W);

for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(H);
}
var out = '';

for (let i = 0; i < H; i++) {
    let inputs = readline().split(' ');
    for (let j = 0; j < W; j++) {
        arr[j][i] = parseInt(inputs[j]);
    }
}

for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
        if (arr[i][j] === 0) {
            let obstacles = [];
            if (i>0 && j>0) {
                obstacles.push(arr[i-1][j-1]);
            }
            if (j>0) {
                obstacles.push(arr[i][j-1]);
            }
            if (i<W-1 && j>0) {
                obstacles.push(arr[i+1][j-1]);
            }
            if (i>0) {
                obstacles.push(arr[i-1][j]);
            }
            if (i<W-1) {
                obstacles.push(arr[i+1][j]);
            }
            if (i>0 && j<H-1) {
                obstacles.push(arr[i-1][j+1]);
            }
            if (j<H-1) {
                obstacles.push(arr[i][j+1]);
            }
            if (i<W-1 && j<W-1) {
                obstacles.push(arr[i+1][j+1]);
            }
            if (!obstacles.includes(0)) {
                out = i + ' ' + j;
                break
            }
        }
    }
}

console.log(out);



//variant #2:

const W = parseInt(readline());
const H = parseInt(readline());
const grid = [];

for (let i = 0; i < H; i++) {
    var inputs = readline().split(' ');
    const line = [];
    for (let j = 0; j < W; j++) {
        const v = parseInt(inputs[j]);
        line.push(v);
    }
    grid.push(line);
}

function isObstacle(row, col) {
    return (grid[row] === undefined || grid[row][col] === undefined) ? 1 : grid[row][col]
}

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (grid[i][j] === 0
            && isObstacle(i - 1, j - 1)
            && isObstacle(i - 1, j)
            && isObstacle(i - 1, j + 1)
            && isObstacle(i, j - 1)
            && isObstacle(i, j + 1)
            && isObstacle(i + 1, j - 1)
            && isObstacle(i + 1, j)
            && isObstacle(i + 1, j + 1)) {
            console.log(j, i);
        }
    }
}