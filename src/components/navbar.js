import React from "react";
import Roules from "./roules";
import Newgame from "./newgame";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // this.reset = this.reset.bind(this);
  }

  //   reset(){
  //   // reset the game. Update the state to default.

  //   }

  render() {
    return (
      <div  className="navbar">
        <nav>
          <a className="rules" href="#">
            {" "}
           Rules
          </a>
          <a className="newGame" href="#">
           
            New Game
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
// <Newgame reset={reset}/>
