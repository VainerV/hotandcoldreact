import React from "react";
//import Gameover from "./gameover";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getTheNumber: undefined,
      hintColor: this.props.hintColor,
      hintText: this.props.hintText
    };
  }

  numberRangeCheck() {
    if (this.state.getTheNumber < 1 || this.state.getTheNumber > 100) {
      alert("Please enter the number between 1 and 100");
      return false;
    }
    return true;
  }

  numberInput = React.createRef();
  // getTheNumber = (event) =>{
  //   event.preventDefault();
  //   let userNumber = (this.numberInput.current.value)
  //   console.log(userNumber)
  // }

  handleNumberInputChange(event) {
    this.setState({ getTheNumber: event.target.value });
  }

  handleSubmit(event) {
    if (this.numberRangeCheck()) {
      this.props.playTheGame(this.state.getTheNumber, () => {
        this.gameLogic();
        this.setState({ getTheNumber: "" });
        this.numberInput.current.focus();
      });
    } else {
      this.setState({ getTheNumber: "" });
      this.numberInput.current.focus();
    }
  }


  gameLogic() {
    let hiddenNumber = this.props.number;
    let userGuess = this.state.getTheNumber;
    let guessDistance = Math.abs(hiddenNumber - userGuess);

    console.log(this.props.number)
    switch (true) {
      case this.props.guesses.length > 9:
      //this.setState({ hintColor: "steelblue", hintText: "HINT" });
        this.setState({ hintColor: "red", hintText: "GAME OVER" });
        this.props.gameOver();

        break;
      case guessDistance > 30:
        this.setState({ hintColor: "darkblue", hintText: "FREEZING" });

        break;
      case guessDistance < 30 && guessDistance > 20:
        this.setState({ hintColor: "blue", hintText: "COLDER" });

        break;
      case guessDistance < 20 && guessDistance > 10:
        this.setState({ hintColor: "lightblue", hintText: "COLD" });

        break;
      case guessDistance < 10 && guessDistance > 5:
        this.setState({ hintColor: "pink", hintText: "WARM" });

        break;
      case guessDistance < 5 && guessDistance > 3:
        this.setState({ hintColor: "red", hintText: "WARMER" });

        break;
      case guessDistance < 3 && guessDistance > 1:
        this.setState({ hintColor: "darkred", hintText: "HOT" });

        break;

      case guessDistance === 0:
        this.setState({ hintColor: "green", hintText: "WINNER" });
        this.props.gameWinner();
        //this.setState({ hintColor: "steelblue", hintText: "HINT" });
        break;

      default:
        console.log("Hot and Cold");
        break;
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-elements-container">
          <span
            className="small-logo"
            style={{ backgroundColor: this.state.hintColor }}
          >
            {this.state.hintText}
          </span>

          <input
            type="number"
            ref={this.numberInput}
            placeholder="Enter a Number"
            value={this.state.getTheNumber}
            className="input-number"
            onChange={event => this.handleNumberInputChange(event)}
            onKeyDown={event => {
              if (event.key === "Enter") {
                this.handleSubmit(event);
              }
            }}
          />
          <button
            type="submit"
            className="submit-guess"
            onClick={event => this.handleSubmit(event)}
          >
            Sumbit Guess
          </button>
          <p className="count"># of Attempts: {this.props.numberOfGuesses}</p>
          <p className="guessBox">{this.props.guesses.join()}</p>
        </div>
      </div>
    );
  }
}
export default Game;
