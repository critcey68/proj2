import React, {Component } from 'react';



class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
// export default Board;
// export default Square;
//
// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
