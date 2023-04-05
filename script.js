//Make board
let chessBoard = new Map();

function drawBoard() { //add the vertices (boxes on board)
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            chessBoard.set(`${[i, j]}`, []);
        }
    }
}         

//add edges to all boxes in chessBoard
function addEdges() {
    //use the chessBoard
    for(let [box] of chessBoard) {
        const boxArr = box.split(',');
        const x = parseInt(boxArr[0]);
        const y = parseInt(boxArr[1]);

        const KnightDirections = { // all knight directions from any box 
            1: [ x + 1, y + 2 ],
            2: [ x + 2, y + 1 ],
            4: [ x + 2, y - 1 ],
            5: [ x + 1, y - 2 ],
            7: [ x - 1, y - 2 ],
            8: [ x - 2, y - 1 ],
            10: [ x - 2, y + 1 ],
            11: [ x - 1, y + 2 ],
        }

        for (let dir in KnightDirections) {
            const posMove = KnightDirections[dir].toString();

            // if possible move (posMove) is valid on board and edge is not yet created on current box
            if (chessBoard.has(posMove) && !chessBoard.get(box).includes(posMove)) {
                chessBoard.get(box).push(posMove);
            }
        }
    }
}