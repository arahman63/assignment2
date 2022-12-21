/** @format */
import "./App.css";
import React, { useEffect, useState } from "react";
import Title from "./components/Title";

const TitleImages = [
  { src: "/images/chicken.jpg", matched: false },
  { src: "/images/bird.jpg", matched: false },
  { src: "/images/cow.png", matched: false },
  { src: "/images/goat.jpg", matched: false },
  { src: "/images/lamb.jpg", matched: false },
  { src: "/images/sheep.jpg", matched: false },
];

function App() {
  const [titles, setTitles] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleTitles = () => {
    const shuffleTitles = [...TitleImages, ...TitleImages]
      //creates shuffled array
      .sort(() => Math.random() - 0.5)
      //card contains a id prop
      .map((title) => ({ ...title, id: Math.random() }));
    setTitles(shuffleTitles);
  };

  //handle the first and second choice
  const handleChoice = (title) => {
    firstChoice ? setSecondChoice(title) : setFirstChoice(title);
  };
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setTitles((previousTitles) => {
          return previousTitles.map((title) => {
            if (title.src === firstChoice.src) {
              return { ...title, matched: true };
            } else {
              return title;
            }
          });
        });
        resetTries();
      } else {
        setTimeout(() => resetTries(), 1500);
      }
    }
  }, [firstChoice, secondChoice]);
  const resetTries = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleTitles}>New Game</button>
      
      <div className="title-grid">
        {titles.map((title) => (
          <Title
            key={title.id}
            title={title}
            handleChoice={handleChoice}
            flipState={
              title === firstChoice || title === secondChoice || title.matched
            }
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
