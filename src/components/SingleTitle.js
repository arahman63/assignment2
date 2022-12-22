/** @format */

import "./SingleTitle.css";

export default function SingleTile({ tile, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(tile);
    }
  };

  return (
    <div className="tile">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={tile.src} alt="tile front" />
        <img
          className="back"
          src="/images/bg.jpg"
          onClick={handleClick}
          alt="tile back"
        />
      </div>
    </div>
  );
}
