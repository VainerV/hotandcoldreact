import React from "react";
import Game from './app';

class Newgame extends React.Component {
  constractor(props) {
    super(props);

  }


  render() {
    retrun(
      <div className="new-game">
        <Game />
      </div>
    );
  }
}

export default Newgame;
