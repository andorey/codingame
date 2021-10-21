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

let possPosVert = [1,2,3,4,5,6,7,8].map(el => rP[0] + el).filter(e => e !== rookPosition);
let possPosHors = [...'abcdefgh'].map(el => el+rP[1]).filter(e => e !== rookPosition);


for (let i = 0; i < nbPieces; i++) {
    const inputs = readline().split(' ');
    const inptCol = parseInt(inputs[0]);
    const inptPos = inputs[1];

    if( inptCol === 0 ){

        if( possPosVert.includes(inptPos) ){

            let indexV = possPosVert.indexOf(inptPos);

            if(inptPos[1] > rookPosition[1]){
                possPosVert = possPosVert.slice(0, indexV)
            }else{
                possPosVert = possPosVert.slice(indexV + 1, )
            }
        }

        if( possPosHors.includes(inptPos)){

            let indexH = possPosHors.indexOf(inptPos);

            if(inptPos[0] > rookPosition[0]){
                possPosHors = possPosHors.slice(0, indexH)

            }else{
                possPosHors = possPosHors.slice(indexH + 1,)
            }
        }

    }else{
        if( possPosVert.includes(inptPos) ){

            let indexVR = possPosVert.indexOf(inptPos);
            RxV.push(inptPos)

            if(inptPos[1] > rookPosition[1]){
                possPosVert = possPosVert.slice(0, indexVR+1)
            }else{
                possPosVert = possPosVert.slice(indexVR, )
            }
        }

        if( possPosHors.includes(inptPos) ){

            let indexHR = possPosHors.indexOf(inptPos);
            RxH.push(inptPos)

            if(inptPos[0] > rookPosition[0]){
                possPosHors = possPosHors.slice(0, indexHR+1)
            }else{
                possPosHors = possPosHors.slice(indexHR,)
            }
        }
    }
}

let summArr = [...possPosHors, ...possPosVert];

for(let i=0; i < summArr.length; i++){
    if(RxV.includes(summArr[i])){
        summArr[i] = 'R' + rookPosition + 'x'+summArr[i]
    }else if(RxH.includes(summArr[i])){
        summArr[i] = 'R' + rookPosition + 'x'+summArr[i]
    }else{
        summArr[i] = 'R' + rookPosition + '-'+summArr[i]
    }
}

summArr.sort()

console.log(summArr.join('\n'))