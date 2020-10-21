import React from "react";
import style from "./square.scss";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSquareClick, color } = this.props;
    return (
      <button onClick={() => onSquareClick()}>
        <div className={style[color]}></div>
      </button>
    );
  }
}
export default Square;
