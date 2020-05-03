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
  squares[i] = 'X';
  this.setState({squares: squares});
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
    const status = 'Next player: XYZ';

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

export default App;
