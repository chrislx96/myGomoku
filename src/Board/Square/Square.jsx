import React from "react";
import style from "./square.scss";

function Square(props) {
  const { onSquareClick, color } = props;
  return (
    <button className={style.square} onClick={() => onSquareClick()}>
      <div className={style[color]}></div>
    </button>
  );
}
export default Square;
