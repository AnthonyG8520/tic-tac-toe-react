import {useState} from "react";


export default function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSqaures = history[history.length - 1];

    function handlePlay(nextSquares){

        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}

function Board({xIsNext, squares, onPlay}) {

    //these have been lifted to the game function
    // const [squares, setSquares] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)

    function handleClick(squareToUpdate){

        // this conditional prevents another letter being placed
        // in the square if one is already present
        //also checks for a winner using calculateWinner function
        if(squares[squareToUpdate] || calculateWinner(squares)){
            return;
        }

        const nextSquares = squares.slice();

        //this conditional tell the board when to put an X or an O
        // based off of the state of the XIsNext boolean
        // after X or O is used the state of the variable is flipped
        if(xIsNext){
            nextSquares[squareToUpdate] = 'X'
        }else{
            nextSquares[squareToUpdate] = 'O'
        }

        onPlay(nextSquares)

        // these are being replaced by the above call
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
    }

    //------------------------------------------
    // this code block will either display the winner of the game
    // or display the next player if a winner is not present
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner: " + winner
    }else{
        status = "Next player: " + (xIsNext ? "X" : "O")
    }
    //--------------------------------------------

      return(
          <>
              <div className="status">{status}</div>
              <div className="board-row">
                  <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                  <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                  <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
              </div>
              <div className="board-row">
                  <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                  <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                  <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
              </div>
              <div className="board-row">
                  <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                  <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                  <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
              </div>
          </>
      );
}



function Square({value, onSquareClick}){
    // Square is now receiving the value prop from the Board component

    // const  [value, setValue] = useState(null)

    // function handleCLick(){
    //     setValue('X')
    // }


    return <button onClick={onSquareClick} className="square">{value}</button>
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}