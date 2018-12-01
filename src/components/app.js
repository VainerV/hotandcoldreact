import React from "react";
import Navbar from "./navbar";
import Game from "./game";
import Rules from "./rules";
import Gameover from "./gameover";
import Winner from "./winner"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: false,
      newGame: false,
      gameOver: false,
      gameWinner: false,
      number: Math.floor(Math.random() * 100 + 1), // random number function
      numberOfGuesses: 0,
      guesses: [],
      userNumber: 0
    };
  }

  showRules() {
    this.setState({ showRules: !this.state.showRules });
  }

  gameOver() {
    this.setState({ gameOver: !this.state.gameOver });
  }

  gameWinner(){
    this.setState({ gameWinner: !this.state.gameWinner });
  }

  newGame() {
    this.setState({
      number: Math.floor(Math.random() * 100 + 1), // random number function
      numberOfGuesses: 0,
      guesses: [],
      userNumber: 0,
      gameOver: false,
      gameWinner:false
    });
    console.log("new game reset the state", this.state);
  }

  playTheGame(number, callback) {
    this.setState({
      numberOfGuesses: this.state.numberOfGuesses + 1,
      guesses: [...this.state.guesses, number]
    }, callback);
  }

  render() {
    let gameRules = <div />;
    let gameOver = <div />;
    let gameWinner = <div />;
    
    if(this.state.gameWinner){
      gameWinner = <Winner newGame={() => this.newGame()} />
    }

    if (this.state.showRules) {
      gameRules = <Rules showRules={() => this.showRules()} />;
    }

    if (this.state.gameOver) {
      gameOver = (
        <Gameover
          gameOver={() => this.gameOver()}
          newGame={() => this.newGame()}
        />
      );
    }

    return (
      <div>
        {gameRules}
        {gameOver}
        {gameWinner}
        <header>
          <h1>Hot or Cold</h1>
          <p>Guessing game in React</p>
        </header>
        <div className="application">
          <Navbar
            newGame={() => this.newGame()}
            showRules={() => this.showRules()}
          />
          <Game
            playTheGame={(number, callback) => this.playTheGame(number, callback)}
            guesses={this.state.guesses}
            numberOfGuesses={this.state.numberOfGuesses}
            number={this.state.number}
            gameOver={() => this.gameOver()}
            gameWinner={()=> this.gameWinner()}
          />
        </div>
      </div>
    );
  }
}

export default App;
