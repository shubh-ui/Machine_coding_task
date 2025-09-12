export const checkWinner = (board, size) => {
    console.log(board)
    for(let i = 0; i < size; i++) {
        if(board[i][0] && board[i].every(cell => cell === board[i][0])) {
            console.log(board[i][0])
            return board[i][0];
        }

        if(board[0][i] && board.every((row) => row[i] === board[0][i])) {
            return board[0][i];
        }
    }
}