import React from "react";
import Roules from "./roules";
import Newgame from './newgame';

class Navbar extends React.Component {
  constractor(props) {
    super(props);
    
    this.reset = this.reset.bind(this);

  }

  reset(){
  // reset the game. Update the state to default.

  }

  render() {
    retrun(
      <div className="navBar">
        <Roules />
        <Newgame reset={reset}/>
      </div>
    );
  }
}

export default Navbar;
