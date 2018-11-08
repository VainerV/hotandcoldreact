import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * 100 + 1), // random number function
      numberOfGuesses: 0,
      guesses: [],
      userNumber: 0
    };
    this.newGame = this.newGame.bind(this);
  }


  newGame() {
    if(this.props.newGameRequest()){
      console.log("new game reset the state")
    this.setState({
      number: Math.floor(Math.random() * 100 + 1), // random number function
      numberOfGuesses: 0,
      guesses: [],
      userNumber: 0
    })
  }
  }

  playTheGame() {
    this.setState({numberOfGuesses: this.state.numberOfGuesses + 1 })
    this.setState({ guesses: [...this.state.guesses, this.state.userNumber] });
    console.log(this.state.guesses);
  }

  render() {
    return (
      <div className="game">
        <div className="game-elements-container">
          <span className="small-logo">HINT</span>

          <input
            type="number"
            placeholder="Enter a Number"
            className="input-number"
            // value={this.state.userNumber}
            onChange={event =>
              this.setState({ userNumber: event.currentTarget.value })
            }
          />
          <button
            type="submit"
            className="submit-guess"
            onClick={() => this.playTheGame()}
          >
            Sumbit Guess
          </button>
          <p className="count"># of Attempts: </p>
          <p className="guessBox">Punched numbers will be here</p>
        </div>
      </div>
    );
  }
}
export default Game;
