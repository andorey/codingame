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