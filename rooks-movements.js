//conditions:
// In chess, the board is split in 8 rows and 8 columns. Considering the view of the game to be from the white side, the utmost top left cell is called a8 and the utmost top rightcell is called h8. Decreasing from top to bottom of the chessboard, the utmost down left cell is then called a1 and the utmost down right cell is called h1.
//
// A rook is a piece than can move as many cells as it want to vertically or horizontally. A rook can't go past an ally unit but can replace an opponent one.
//
// Each position must be a valid chessboard-position notation (Algebraic notation) such that it is identified by a column identifier from a to h and a row identifier from 1 to 8.
//
// Given a white rook and a set of chess pieces that can be yours (white) or not (black), print all available movements for the rook in the current configuration.
// Input
// First line : the position of the white rook
// Second line : the amount P of pieces to be placed on the board
// Next P lines : P space-separated lines containing attributes for each piece : color position
//
// color is either 0 (WHITE) or 1 (BLACK)
// position is the chessboard-notation of the position of the given piece
// Output
// A list of space-separated combination where combination has the following shape :
//
// Rfrom_positionactionto_position with from_position being the actual position of the white rook and to_position being a possible destination for the white rook, both in the chessboard-position format. action should be x if the movement involves taking an opponent pieces, - otherwise.
//
// For instance, if the white rook is in d5 and can move to d6, then the output must be Rd5-d6.
// If the white rook is in e4 and can capture an opponent piece in e3, then the output must be Re4xe3
//
// Moves must be sorted in ascending lexicographical ASCII order
// Constraints
// The grid is always an 8*8 matrix

// Example:
// Input:
// d5
// 2
// 0 c1
// 1 e8

// Output:
// Rd5-a5
// Rd5-b5
// Rd5-c5
// Rd5-d1
// Rd5-d2
// Rd5-d3
// Rd5-d4
// Rd5-d6
// Rd5-d7
// Rd5-d8
// Rd5-e5
// Rd5-f5
// Rd5-g5
// Rd5-h5



//variant #1:
const rookPosition = readline();
const nbPieces = parseInt(readline());
const rP = [...rookPosition];
const RxV = [], RxH = [];

//we create two arrays showing the ability to move the rook vertically and horizontally
let possPosVert = [1,2,3,4,5,6,7,8].map(el => rP[0] + el).filter(e => e !== rookPosition);
let possPosHors = [...'abcdefgh'].map(el => el+rP[1]).filter(e => e !== rookPosition);


for (let i = 0; i < nbPieces; i++) {
    const inputs = readline().split(' ');
    const inptCol = parseInt(inputs[0]);
    const inptPos = inputs[1];

    if( inptCol === 0 ){    //first, consider the condition with the location of white pieces on the board

        if( possPosVert.includes(inptPos) ){    //in an array with vertical values
                                                //if a piece of white blocks the movement on the board
            let indexV = possPosVert.indexOf(inptPos);

            if(inptPos[1] > rookPosition[1]){   //when the piece has a coordinate value higher than that of the rook
                possPosVert = possPosVert.slice(0, indexV)
            }else{                              //when the piece has a coordinate value less than that of the rook
                possPosVert = possPosVert.slice(indexV + 1, )
            }
        }

        if( possPosHors.includes(inptPos)){     //in an array with horizontal values

            let indexH = possPosHors.indexOf(inptPos);

            if(inptPos[0] > rookPosition[0]){   //when the piece has a coordinate value higher than that of the rook
                possPosHors = possPosHors.slice(0, indexH)
            }else{                              //when the piece has a coordinate value less than that of the rook
                possPosHors = possPosHors.slice(indexH + 1,)
            }
        }

    }else{              //after, consider the condition with the location of black pieces on the board
        if( possPosVert.includes(inptPos) ){    //in an array with vertical values

            let indexVR = possPosVert.indexOf(inptPos);
            RxV.push(inptPos)                   //save the pieces that were replaced by the rook

            if(inptPos[1] > rookPosition[1]){   //when the piece has a coordinate value higher than that of the rook
                possPosVert = possPosVert.slice(0, indexVR+1)
            }else{                              //when the piece has a coordinate value less than that of the rook
                possPosVert = possPosVert.slice(indexVR, )
            }
        }

        if( possPosHors.includes(inptPos) ){    //in an array with horizontal values

            let indexHR = possPosHors.indexOf(inptPos);
            RxH.push(inptPos)                   //save the pieces that were replaced by the rook

            if(inptPos[0] > rookPosition[0]){   //when the piece has a coordinate value less than that of the rook
                possPosHors = possPosHors.slice(0, indexHR+1)
            }else{                              //when the piece has a coordinate value less than that of the rook
                possPosHors = possPosHors.slice(indexHR,)
            }
        }
    }
}

let summArr = [...possPosHors, ...possPosVert]; //concatenation of two arrays

for(let i=0; i < summArr.length; i++){          //replacing characters in the array with the help of the rook movement data
    if(RxV.includes(summArr[i])){
        summArr[i] = 'R' + rookPosition + 'x'+summArr[i]
    }else if(RxH.includes(summArr[i])){
        summArr[i] = 'R' + rookPosition + 'x'+summArr[i]
    }else{
        summArr[i] = 'R' + rookPosition + '-'+summArr[i]
    }
}

summArr.sort()          //sorting the array so that the replaced objects remain at the end of the array

console.log(summArr.join('\n'))




//variant #2:
const a = 'a'.charCodeAt(0);

function index(char) {
    return char.charCodeAt(0) - a + 1;
}

const start = readline();

let grid = Array(9).fill()
.map(() => Array(9).fill(-1));

function tile(place) {
    return grid[index(place)][place[1]];
}

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const [color, place] = readline().split(' ');
    grid[index(place)][place[1]] = color;
}

let moves = [];

function move(place) {
    moves.push(`R${start}${tile(place) === 1 ? 'x' : '-'}${place}`);
}

function up(place) {
    let idx = index(place);
    if (idx < 1 || tile(place) === 0) {
        return;
    }

    if (tile(place) !== 1) {
        up(`${String.fromCharCode(a + idx - 2)}${place[1]}`);
    }
    if (place !== start) {
        move(place);
    }
}

function left(place) {
    if (place[1] === 0 || tile(place) === 0) {
        return;
    }

    if (tile(place) !== 1) {
        left(`${place[0]}${place[1] - 1}`);
    }
    if (place !== start) {
        move(place);
    }
}

function right(place) {
    if (place[1] === 9 || tile(place) === 0) {
        return;
    }

    if (place !== start) {
        move(place);
    }
    if (tile(place) !== 1) {
        right(`${place[0]}${place[1] - -1}`);
    }
}

function down(place) {
    let idx = index(place);
    if (idx > 8 || tile(place) === 0) {
        return;
    }

    if (place !== start) {
        move(place);
    }
    if (tile(place) !== 1) {
        down(`${String.fromCharCode(a + idx)}${place[1]}`);
    }
}

up(start);
left(start);
right(start);
down(start);

console.log(moves.sort().join('\n'));



//variant #3:
class Pos {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    equals(other) {
        return this.toString() === other.toString();
    }

    toString() {
        return String.fromCharCode(this.col + 96) + this.row;
    }

    move({col, row}) {
        return new Pos(this.col + col, this.row + row);
    }

    isOffBoard() {
        return this.col < 1 || this.col > 8 || this.row < 1 || this.row > 8;
    }
    clone() {
        return new Pos(this.col, this.row);
    }
}

Pos.fromString = (input) => new Pos(input.charCodeAt(0) - 96, +input[1]);


const DIRS = [
    {col: 1, row: 0},
    {col: -1, row: 0},
    {col: 0, row: 1},
    {col: 0, row: -1}];

const solve = (rook, pieces) => DIRS.reduce((r, dir) => {
    let pos = ROOK.clone();
    for(let i=1; i<8; i++) {
        pos = pos.move(dir);
        if (pos.isOffBoard()) break;
        const hit = PIECES.find(piece => piece.pos.equals(pos));
        if (hit) {
            if (hit.color === 1) {
                r.push(`R${ROOK}x${pos}`);
            }
            break;
        } else {
            r.push(`R${ROOK}-${pos}`);
        }
    }
    return r;
}, []);

const ROOK = Pos.fromString(readline());
const PIECES = [...Array(+readline())].map(readline).map(
    line => (parts = line.split(' '), {
        color: +parts[0],
        pos: Pos.fromString(parts[1])
    })
);

console.log(solve(ROOK, PIECES).sort().join('\n'));



//variant #4:
'use strict';

const rookPosition = readline();
const [rookRank, rookFile] = decodeSpace(rookPosition);

const nbPieces = parseInt(readline());

function decodeSpace(s) {
    let res = [];
    res.push(s.charCodeAt(0) - 97);
    res.push(parseInt(s[1]) - 1);
    console.error(s);
    console.error(res);
    return res;
}

function encodeSpace(s) {
    let [rank, file] = s;
    let res = [];
    res.push(String.fromCharCode(97 + s[0]));
    res.push((s[1] + 1).toString());
    return res.join('');
}

let board = Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = Array(8).fill('');
}

for (let i = 0; i < nbPieces; i++) {
    let inputs = readline().split(' ');
    const colour = inputs[0];
    const onePiece = inputs[1];
    let space = decodeSpace(onePiece);
    board[space[0]][space[1]] = colour;
}

let answer = [];
console.error(board);

for (let dr = 1; rookRank + dr < 8; dr++) {
    if (board[rookRank+dr][rookFile] === '0') break;
    let entry = encodeSpace([rookRank+dr, rookFile]);
    if (board[rookRank+dr][rookFile] === '1') entry = 'x' + entry;
    else entry = '-' + entry;
    answer.push(entry);
    if (board[rookRank+dr][rookFile] === '1') break;
}
for (let dr = -1; rookRank + dr >= 0; dr--) {
    if (board[rookRank+dr][rookFile] === '0') break;
    let entry = encodeSpace([rookRank+dr, rookFile]);
    if (board[rookRank+dr][rookFile] === '1') entry = 'x' + entry;
    else entry = '-' + entry;
    answer.push(entry);
    if (board[rookRank+dr][rookFile] === '1') break;
}
for (let df = 1; rookFile + df < 8; df++) {
    if (board[rookRank][rookFile+df] === '0') break;
    let entry = encodeSpace([rookRank, rookFile+df]);
    if (board[rookRank][rookFile+df] === '1') entry = 'x' + entry;
    else entry = '-' + entry;
    answer.push(entry);
    if (board[rookRank][rookFile+df] === '1') break;
}
for (let df = -1; rookFile + df >= 0; df--) {
    if (board[rookRank][rookFile+df] === '0') break;
    let entry = encodeSpace([rookRank, rookFile+df]);
    if (board[rookRank][rookFile+df] === '1') entry = 'x' + entry;
    else entry = '-' + entry;
    answer.push(entry);
    if (board[rookRank][rookFile+df] === '1') break;
}

answer.sort();
console.error(answer);

for (let position of answer) {
    console.log('R' + rookPosition + position);
}



//variant #5:
let columns = 'abcdefgh';
const rookPosition = readline();
let pieces = [[],[]];
for (let i = +readline(); i > 0; i--) {
    let inputs = readline().split(' ');
    pieces[inputs[0]].push(inputs[1]);
}
let moves = [];
for(let d = 0; d < 4; d++){
    let column = columns.indexOf(rookPosition[0]);
    let line = rookPosition[1] - 1;
    for(let m = 0; m < 8; m++){
        column += [0,-1,0,1][d];
        line += [1,0,-1,0][d];

        if(column >= 8 || column < 0 || line >= 8 || line < 0) break;
        let notation = columns[column]+(line+1);
        if(pieces[1].indexOf(notation) === -1){
            if(pieces[0].indexOf(notation) === -1)
                moves.push('R'+rookPosition + '-' + notation);
            else break;
        } else {
            moves.push('R'+rookPosition + 'x' + notation);
            break;
        }
    }
}
moves.sort();
console.log(moves.join('\n'));



//variant #6:
let readPos = (p) => ({ color: (+p[0]||0), x: +p[1][1], y: p[1][0].charCodeAt(0) - 96});
let toPos = (p) => `${String.fromCharCode(96 + p.y)}${p.x}`;

const rook = readPos([null, readline()]);
const pieces = [...Array(+readline())].map(_ => readPos(readline().split(' ')));
const left = pieces.reduce((p, c) => c.y === rook.y && c.x < rook.x && c.x > p.x ? c : p, { color: 0, x: 0, y: 0 });
const right = pieces.reduce((p, c) => c.y === rook.y && c.x > rook.x && c.x < p.x ? c : p, { color: 0, x: 9, y: 9 });
const down = pieces.reduce((p, c) => c.x === rook.x && c.y < rook.y && c.y > p.y ? c : p, { color: 0, x: 0, y: 0 });
const top = pieces.reduce((p, c) => c.x === rook.x && c.y > rook.y && c.y < p.y ? c : p, { color: 0, x: 9, y: 9 });

let result = [];
for (let x = rook.x - 1; x > left.x; x--)
    result.push({ attack: 0, x: x, y: rook.y });
if (left.color)
    result.push({ attack: 1, x: left.x, y: rook.y });

for (let x = rook.x + 1; x < right.x; x++)
    result.push({ attack: 0, x: x, y: rook.y });
if (right.color)
    result.push({ attack: 1, x: right.x, y: rook.y });

for (let y = rook.y - 1; y > down.y; y--)
    result.push({ attack: 0, x: rook.x, y: y });
if (down.color)
    result.push({ attack: 1, x: rook.x, y: down.y });

for (let y = rook.y + 1; y < top.y; y++)
    result.push({ attack: 0, x: rook.x, y: y });
if (top.color)
    result.push({ attack: 1, x: rook.x, y: top.y });

console.log(result.map(r => `R${toPos(rook)}${r.attack ? 'x' : '-'}${toPos(r)}`).sort().join('\n'));



//variant #7:
let rook = readline(), pieces = +readline(), grid=[], moves=[], x;
let rx = rook.charCodeAt(0)-97, ry = rook[1]-1, alpha="abcdefgh", action="-x";
for (let i=0; i<pieces; i++){
    let [color,pos] = readline().split(' ');
    grid[pos.charCodeAt(0)-97 + 8*(pos[1]-'1')] = 2-color;     // 2 white 1 black
}
for (x=rx-1; x>=0 && test(x, ry);) x--;
for (x=rx+1; x<=7 && test(x, ry);) x++;
for (x=ry-1; x>=0 && test(rx, x);) x--;
for (x=ry+1; x<=7 && test(rx, x);) x++;

function test(x,y){
    let hit = grid[x+8*y] | 0, move = "R" + rook + action[hit] + alpha[x] + (1+y);
    if (hit !== 2) moves.push(move);
    return !hit;
}
moves.sort().map(mv => console.log(mv));