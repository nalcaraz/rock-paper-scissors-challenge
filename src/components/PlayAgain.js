import React from 'react';

const PlayAgain = ({handleReset, winner})=>{
    return (
        <>
        <h1 className="uppercase light-text text-center">
        {winner === "human"
          ? "You Win"
          : winner === "computer"
          ? "You Lose"
          : "TIE"}
      </h1>
      <button className="uppercase play-again" onClick={handleReset}>
        play again
      </button>
      </>
    )
}

export default PlayAgain;