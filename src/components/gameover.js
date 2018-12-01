import React from "react";

class Gameover extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>
            {`Game over you exided ten attmpts to coplete the game,
           please try again`}
          </p>
          <button className="close" onClick={this.props.newGame}>
            {" "}
            Play Again!
          </button>
        </div>
      </div>
    );
  }
}

export default Gameover;
