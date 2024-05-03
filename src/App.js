import {useState} from "react";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(squareToUpdate){

        // this conditional prevents another letter being placed
        // in the square if one is already present
        if(squares[squareToUpdate]){
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

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

      return(
          <>
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