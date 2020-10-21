import React from "react";
import Square from "./Square/Square.jsx";
import style from "./board.scss";

const BOARD_SIZE = 15;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(BOARD_SIZE * BOARD_SIZE).fill(null),
      whiteIsNext: false,
      winner: "No winner yet!",
    };
  }

  handleClick(i) {
    const { whiteIsNext, squares, winner } = this.state;
    const copiedSquares = squares.slice();
    const isGameOver = winner !== "No winner yet!" ? true : false;

    !copiedSquares[i] &&
      !isGameOver &&
      (copiedSquares[i] = whiteIsNext ? "white" : "black") &&
      this.setState({
        squares: copiedSquares,
        whiteIsNext: !whiteIsNext,
      });
    this.isWin(copiedSquares, i) &&
      !isGameOver &&
      this.setState({ winner: copiedSquares[i] });
  }

  renderSquare(i) {
    const { squares } = this.state;
    return (
      <Square
        key={i}
        color={squares[i]}
        onSquareClick={() => {
          this.handleClick(i);
        }}
      ></Square>
    );
  }

  renderBoard(boardSize) {
    let n = 0;
    let board = [];
    for (let i = 0; i < boardSize; i++) {
      let boardRow = [];
      for (var j = 0; j < boardSize; j++, n++) {
        boardRow.push(this.renderSquare(n));
      }
      board.push(
        <div key={i} className={style.row}>
          {boardRow}
        </div>
      );
    }
    return <div>{board}</div>;
  }

  isWin(squares, index) {
    const currentPlayer = squares[index];
    let isWin = false;
    const n = BOARD_SIZE;
    squares[index + 1] === currentPlayer &&
      squares[index + 2] === currentPlayer &&
      squares[index + 3] === currentPlayer &&
      squares[index + 4] === currentPlayer &&
      (isWin = true);
    squares[index + n] === currentPlayer &&
      squares[index + 2 * n] === currentPlayer &&
      squares[index + 3 * n] === currentPlayer &&
      squares[index + 4 * n] === currentPlayer &&
      (isWin = true);
    squares[index + n + 1] === currentPlayer &&
      squares[index + 2 * n + 2] === currentPlayer &&
      squares[index + 3 * n + 3] === currentPlayer &&
      squares[index + 4 * n + 4] === currentPlayer &&
      (isWin = true);
    squares[index + n - 1] === currentPlayer &&
      squares[index + 2 * n - 2] === currentPlayer &&
      squares[index + 3 * n - 3] === currentPlayer &&
      squares[index + 4 * n - 4] === currentPlayer &&
      (isWin = true);
    squares[index - 1] === currentPlayer &&
      squares[index - 2] === currentPlayer &&
      squares[index - 3] === currentPlayer &&
      squares[index - 4] === currentPlayer &&
      (isWin = true);
    squares[index - n] === currentPlayer &&
      squares[index - 2 * n] === currentPlayer &&
      squares[index - 3 * n] === currentPlayer &&
      squares[index - 4 * n] === currentPlayer &&
      (isWin = true);
    squares[index - n + 1] === currentPlayer &&
      squares[index - 2 * n + 2] === currentPlayer &&
      squares[index - 3 * n + 3] === currentPlayer &&
      squares[index - 4 * n + 4] === currentPlayer &&
      (isWin = true);
    squares[index - n - 1] === currentPlayer &&
      squares[index - 2 * n - 2] === currentPlayer &&
      squares[index - 3 * n - 3] === currentPlayer &&
      squares[index - 4 * n - 4] === currentPlayer &&
      (isWin = true);
    return isWin;
  }

  render() {
    const { whiteIsNext, winner } = this.state;
    const nextPlayer = whiteIsNext ? "White" : "Black";
    return (
      <main>
        <h2>{nextPlayer} player moves.</h2>
        <h2>Winner is : {winner}</h2>
        {this.renderBoard(BOARD_SIZE)}
      </main>
    );
  }
}
export default Board;
