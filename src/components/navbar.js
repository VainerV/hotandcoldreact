import React from "react";
import Roules from "./roules";
import Newgame from './newgame';
import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
    super(props);
    
   // this.reset = this.reset.bind(this);

  }

//   reset(){
//   // reset the game. Update the state to default.

//   }

  render() {
    return(
      <div className="nav-bar">
        <Roules />
        <Newgame />
        
      </div>
    );
  }
}

export default Navbar;
// <Newgame reset={reset}/>