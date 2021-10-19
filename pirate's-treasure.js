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



//variant #3:
const W = +readline();
const H = +readline();
let map = [...Array(H)].map(_ => readline().split` `);

map.forEach((row, x) => row.forEach((v, y) => {
    if(v === 0){
        let total = 0, obstacle = 0;
        for(i = x - 1; i <= x + 1; i++){
            for(j = y - 1; j <= y + 1; j++){
                if(i in map && j in map[i]){
                    total++;
                    map[i][j] === 1 && obstacle++;
                }
            }
        }
        if([4, 6, 9].includes(total) && total - obstacle === 1) return print(y, x);
    }
}));



//variant #4:
const [W, H] = [+readline(), +readline()];
const map = [...Array(H)].map(_ => readline().split(' ').map(Number));

let isTreasure = (x, y) => !map[y][x] &&
    (x === 0 || map[y][x - 1]) &&
    (x === W - 1 || map[y][x + 1]) &&
    (y === 0 || map[y - 1][x]) &&
    (y === H - 1 || map[y + 1][x]) &&
    (x === 0 || y === 0 || map[y - 1][x - 1]) &&
    (x === W - 1 || y === 0 || map[y - 1][x + 1]) &&
    (x === 0 || y === H - 1 || map[y + 1][x - 1]) &&
    (x === W - 1 || y === H - 1 || map[y + 1][x + 1]);

let treasure = map
.map((row, y) => row.map((_, x) => isTreasure(x, y) ? {x, y} : null))
.find(row => row.find(cell => cell))
.filter(cell => cell)[0];

console.log(treasure.x, treasure.y);



//variant #5:
const W = +readline();
const H = +readline();

const map = [];
for (let i = 0; i < H; i++) {
    map.push(readline().split(' ').map(Number));
}

const getCell = (row, col) =>
    (map[row] === undefined || map[row][col] === undefined) ? 1 : map[row][col];

function solution(map) {

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 0
                && getCell(i - 1, j - 1)
                && getCell(i - 1, j)
                && getCell(i - 1, j + 1)

                && getCell(i, j - 1)
                // i,j == 0
                && getCell(i, j + 1)

                && getCell(i + 1, j - 1)
                && getCell(i + 1, j)
                && getCell(i + 1, j + 1)) {
                print(j, i);
                return;
            }
        }
    }
}

solution(map);



//variant #6:
const w = +readline()
const h = +readline()
const grid = [...Array(h)].map(_=>readline().split(" "))

const _cell = (y,x) => { try { return grid[y][x] } catch {}}
const cell = (y,x) => _cell(y,x) || 1;

for(let x=0; x<w; x++){
    for(let y=0; y<h; y++){
        const surroundingcells = [
            [-1,-1], [-1, 0], [-1, 1],
            [ 0,-1],          [ 0, 1],
            [ 1,-1], [ 1, 0], [ 1, 1]
        ].map(v=>cell(y+v[0],x+v[1])).join('')

        if ( surroundingcells === "11111111" && cell(y,x) === 0){
            console.log(x, y)
        }
    }
}



//variant #7:
readline() // unused
const map = [...Array(+readline())].map(x => readline().split(' ').map(Number))
const cell = (i, j) => (map[i] === undefined || map[i][j] === undefined) ? 1 : map[i][j]
const surrounders = (i, j) =>
    cell(i - 1, j - 1) && cell(i - 1, j) && cell(i - 1, j + 1)
    && cell(i    , j - 1)                   && cell(i    , j + 1)
    && cell(i + 1, j - 1) && cell(i + 1, j) && cell(i + 1, j + 1);
for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === 0 && surrounders(i, j)) { print(j, i); break }
    }
}



//variant #8:
const W = +readline();
const H = +readline();
[...Array(H)].map(()=>readline().split(' ').map((c)=>1-c))
.forEach((r,y,a)=>r.forEach((c,x,b)=>{
    if(c===1){
        let f = 0;
        for(let i=-1; i<2; i++)
            for(let j=-1; j<2; j++)
                f += (a[y+i]?(a[y+i][x+j]?1:0):0);
        if(f === 1) console.log(x,y);
    }
}));



//variant #9:
const [W, H] = [+readline(), +readline()];
var gamemap = [...Array(H)].map(_ => readline().split(' ').map(Number))

function extMap(x,y){
    if ((x<0) || (x>=W) || (y<0) || (y>=H)) return 1;
    return gamemap[x][y]
}

function isSurroundedByObstacle(x, y){
    return [[x+1, y-1], [x+1, y], [x+1, y+1], [x, y-1], [x, y+1], [x-1, y-1], [x-1, y], [x-1, y+1]].map(
        ([m, n]) =>  extMap(m,n )
    ).indexOf(0) === -1
}

var found = false
for (let i = 0; (i < H) && (!found); i++) {
    for (let j = 0; (j < W) && (!found); j++) {
        if ((gamemap[i][j] === 0) && (isSurroundedByObstacle(i, j)) ) {
            res= '' + j + ' ' + i
            found = true;
        }
    }
}

console.log(res);



//variant #10:
let W = +readline();
let H = +readline();
let map = [];
for (let y = 0; y < H; y++)
    map[y] = readline().split(' ');

for(let x = 0; x < W; x++){
    for(let y = 0; y < H; y++){
        let soma = -8;
        for(let x2 = -1; x2 < 2; x2++)
            for(let y2 = -1; y2 < 2; y2++)
                soma += +((map[y+y2] || [])[x+x2] || 1) * ((x2 || y2) ? 1:10);
        if(!soma) console.log(x, y);
    }
}