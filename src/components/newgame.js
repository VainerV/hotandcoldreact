import React from "react";
import Game from './app';

class Newgame extends React.Component {
    constructor(props) {
    super(props);

  }


  render() {
    return(
      <div className="new-game">
        <Game />
      </div>
    );
  }
}

export default Newgame;
