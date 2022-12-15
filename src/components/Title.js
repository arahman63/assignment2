/** @format */

import { disabled } from "express/lib/application";
import "./Title.css";

export default function title({ title, handleState, flipState, disabled }) {
  const handleClick = () => {
    if (!disabled) handleState(title);
  };
  return (
    <div className="title">
      <div className={flipState ? "Flipped" : ""}>
        <img className="f" src={title.src} />
        <img className="bg" src="/images/bg.jpg" onClick={handleClick} />
      </div>
    </div>
  );
}
