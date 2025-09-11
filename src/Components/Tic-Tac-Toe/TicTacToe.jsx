import { useState } from "react"
import './Style.css'

    const Board = ({board, size, handleClick}) => {
        return (
            <div className="board" style={{gridTemplateColumns:`repeat(${size}, 1fr)`}}>
              {
                board.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {
                            row.map((cell, cellIndex) => {
                                return <div className="cell" onClick={() => handleClick(rowIndex, cellIndex)} key={cellIndex}>
                                    {
                                        cell
                                    }
                                </div>
                            })
                        }
                    </div>
                ))
              }
            </div>
        )
    }


const TicTacToe = ({ size = 4 }) => {
    const [board, setBoard] = useState(Array.from({length: size}, () => Array(size).fill(null)));
    const [isXTurn, setIsXTurn] = useState(true);

    console.log(board)
    const handleClick = (rowIdx, cellIdx) => {
        console.log("clicked", rowIdx, cellIdx );
        const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
        deepCopyOfBoard[rowIdx][cellIdx] = isXTurn ? 'X' : 'O';
        setBoard(deepCopyOfBoard);
        setIsXTurn(prev => !prev);
    }

    return (
        <div className="container">
            <Board board={board} size={size} handleClick={handleClick} />
            <div>Status</div>
            <button>Reset</button>
        </div>
    )
}

export default TicTacToe;