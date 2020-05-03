import React, {Component } from 'react';
import logo from './logo.svg';
import bimage from './images/jmt_purplelake.jpeg';
import './App.css';
import Bannerimg from './components/Bannerimg.jsx';
import Todos from './components/Todos.jsx';
import './navbar1.css';
// import Board from './components/Board.jsx';
import Square from './components/Square.jsx';
// import Game from './components/Game.jsx';



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
    }
handleClick(i) {
    const squares = this.state.squares.slice();
  if (calculateWinner(squares) || squares[i])
  {return;}

  squares[i] = this.state.xIsNext ? 'X' : 'O';
  this.setState({squares: squares,
  xIsNext: !this.state.xIsNext,});
}
arrayToConsole() {
  console.log("Test");
}
  renderSquare(i) {

    /* console.log(i);
    {this.arrayToConsole();} */

    return ( <Square
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)} />);
  /*   return <Square value={i} />; */
  }

  render() {
    const winner = calculateWinner(this.state.squares);
      let status;
      if (winner){
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' +
        (this.state.xIsNext ? 'X' : 'O') ;
      }
      return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    // console.log('Hello World')
  return (
    <div className="App">

        <header className="large">
          <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Awesome Freebies</a></li>
          </ul> </nav>
          </header>
          <section>
            <Bannerimg />
            some text here
          </section>
          <Board />

</div>

  );
}
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App;
