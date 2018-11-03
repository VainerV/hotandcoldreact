import React from "react";
import Navbar from "./navbar";
import Game from "./game";
import Rules from "./rules";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: Math.floor(Math.random() * 100 + 1), // random number function
      hintColor: {
        blue: "blue",
        red: "red",
        default: "steelblue"
      },
      hintText: {
        cold: "Cold",
        colder: "Colder",
        hot: "Hot",
        hotter: "Hotter",
        warm: "Warm"
      },
      numberOfGuesses: 0,
      guesses: [],
      showRules: false
    };
  }

  gameCalculations(props) {
    // main game calculations
  }

  // function will retreave the summited number
  yourGuess(props) {}

  showRules() {
    this.setState({ showRules: !this.state.showRules });
  }

  newGame() {
    this.setState({
        number: Math.floor(Math.random() * 100 + 1), // random number function
        numberOfGuesses: 0,
        guesses: [],
        showRules: false
      });
   
  }

  render() {
    let gameRules = <div />;
    if (this.state.showRules) {
      gameRules = <Rules showRules={() => this.showRules()} />;
    }
    return (
      <div>
        {gameRules}
        <header>
          <h1>Hot or Cold</h1>
          <p>Guessing game in React</p>
        </header>
        <div className="application">
          <Navbar
            rules={this.state}
            showRules={() => this.showRules()}
            newGame={() => this.newGame()}
          />
          <Game
            {...this.state}
            gameCalculations={() => this.gameCalculations}
          />
        </div>
      </div>
    );
  }
}

export default App;
