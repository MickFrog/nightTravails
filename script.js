//Make board
let chessBoard = new Map();

function drawBoard() { //add the vertices (boxes on board)
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            chessBoard.set(`${[i, j]}`, []);
        }
    }
}         
