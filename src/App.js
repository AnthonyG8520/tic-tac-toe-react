import {useState} from "react";

export default function Board() {
  return(
      <>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
          <div className="board-row">
              <Square />
              <Square />
              <Square />
          </div>
      </>
  );
}



function Square(){
    const  [value, setValue] = useState(null)

    function handleCLick(){
        setValue('X')
    }


    return <button onClick={handleCLick} className="square">{value}</button>
}