/** @format */
import "./App.css";
import React, { useEffect, useState } from "react";
import SingleTitle from "./components/SingleTitle";

const titleImages = [
  { src: "/images/chicken.jpg", matched: false },
  { src: "/images/bird.jpg", matched: false },
  { src: "/images/cow.png", matched: false },
  { src: "/images/goat.jpg", matched: false },
  { src: "/images/lamb.jpg", matched: false },
  { src: "/images/sheep.jpg", matched: false },
];

function App() {
  const [tiles, setTiles] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle card functionality
  const shuffleTiles = () => {
    // creates 12 tiles
    const shuffleTiles = [...titleImages, ...titleImages]
      // end result will be a shuffled array
      .sort(() => Math.random() - 0.5)
      // each card will have an id property
      .map((tile) => ({ ...tile, id: Math.random() }));

    setTiles(shuffleTiles);
  };

  // handling choices
  const handleChoice = (tile) => {
    choiceOne ? setChoiceTwo(tile) : setChoiceOne(tile);
  };

  // comparing the 2 clicked tiles
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setTiles((prevTiles) => {
          return prevTiles.map((tile) => {
            if (tile.src === choiceOne.src) {
              return { ...tile, matched: true };
            } else {
              return tile;
            }
          });
        });

        resetTries();
      } else {
        setTimeout(() => resetTries(), 1500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //resetting and incrementing the tries
  const resetTries = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleTiles}>New Game</button>

      <div className="tile-grid">
        {tiles.map((tile) => (
          <SingleTitle
            key={tile.id}
            tile={tile}
            handleChoice={handleChoice}
            flipped={tile === choiceOne || tile === choiceTwo || tile.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
