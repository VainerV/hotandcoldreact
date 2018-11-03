import React from "react";
import Rules from "./rules";
import Newgame from "./newgame";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

   
  }

  //   resetTheGame(){
  //   // reset the game. Update the state to default.

  //   }


  render() {
    return (
      <div  className="navbar">
        <nav>
          <a  className="rules"  href="#">
          <span onClick={this.props.showRules}> Rules </span>
          </a>
          <a className="newGame" href="#">
           
            <span>New Game</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
// <Newgame reset={reset}/>
