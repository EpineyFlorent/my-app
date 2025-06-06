import React, { useEffect, useState } from "react";
import "../App.css";

function Game() {
  const [counter, setCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (counter >= 11) {
      setIsGameOver(true);
      setScore(Date.now() - startTime);
    }
    if (counter == 1) {
      setStartTime(Date.now());
    }
  }, [counter]);

  return (
    <div className="game">
      <h1>Recap Game:</h1>
      {isGameOver ? (
        <h2>Congratulation, you won. It took {score} ms</h2>
      ) : (
        <h2>Keep clicking until you reach 11</h2>
      )}
      <button onClick={() => setCounter((previousVlaue) => previousVlaue + 1)}>
        Click me! {counter}
      </button>
    </div>
  );
}

export default Game;
