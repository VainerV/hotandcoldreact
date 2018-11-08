import React from "react";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
   
  }


  render() {
    return (
      <div  className="navbar">
        <nav>
          <a  className="rules"  href="#">
          <span onClick={this.props.showRules}> Rules </span>
          </a>
          <a className="newGame" href="#">
           
            <span onClick={this.props.newGame}>New Game</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;

