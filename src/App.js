import { useState } from "react";
function Square() {
  const [valeu, setValue] = useState(null);
  function handleClick() {
    setValue("x");
  }
  return (
    <button className="square" onClick={handleClick}>
      {valeu}
    </button>
  );
}

export default function Board() {
  return (
    <>
    <Greet/>
   
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

function Greet(){
  return (
    <>
    <h1>Hello User welcome to tictactoe game</h1>

    </>
  );

  

}
