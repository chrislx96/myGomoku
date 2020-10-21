import React from "react";
import Board from "./Board/Board.jsx";
import style from "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Gomoku</h1>
        <Board />
      </main>
    );
  }
}
export default App;
