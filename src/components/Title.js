/** @format */

import "./Title.css";

export default function Title({ title, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) handleChoice(title);
  };
  return (
    <div className="title">
      <div className={flipped ? "flipped" : ""}>
        <img className="f" src={title.src} alt="f" />
        <img
          className="bg"
          src="/images/bg.jpg"
          onClick={handleClick}
          alt="bg"
        />
      </div>
    </div>
  );
}
