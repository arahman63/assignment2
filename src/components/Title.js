/** @format */

import { disabled } from "express/lib/application";
import "./Title.css";

export default function title({ title, handleState, flipState, disabled }) {
  const handleClick = () => {
    if (!disabled) handleState(title);
  };
}
