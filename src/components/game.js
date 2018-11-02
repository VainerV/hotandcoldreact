import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game">
        <div className="game-elements-container">
          <span className="small-logo">Hot or Cold</span>
         
            <input
              type="text"
              placeholder="Enter the Number"
              className="input-number"
            />
            <button type="submit" className="submit-guess">Sumbit Guess</button>
            <p className="count" >
              Guess #
            </p>
            <p className="guessBox">Punched numbers will be here</p>
             
          </div>
        </div>
     
    );
  }
}
export default Game;
