import React from "react";

class Winner extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>
            {`Congratulations!!!! You WON the Game!,
            Play Again!`}
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

export default Winner;
