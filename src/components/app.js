import React from "react";
import Navbar from "./navbar";
import Game from "./game";
import Rules from "./rules";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRules: false,
      newGame: false,
    };
   
  }

  newGameFunction(){
    this.setState({ newGame: true })
    
  }
  
  newGameRequest(){
   if(this.state.newGame){
     this.setState({ newGame: false})
     return true;
   }
   else{
     return false;
   }
  }
  

  showRules() {
    this.setState({ showRules: !this.state.showRules });
  }

  render() {
    let gameRules = <div />;
  
    if (this.state.showRules) {
      gameRules = <Rules showRules={() => this.showRules()} />;
    }
    return (
      <div>
        {gameRules}
        <header>
          <h1>Hot or Cold</h1>
          <p>Guessing game in React</p>
        </header>
        <div className="application">
          <Navbar
            newGame={() => this.newGameFunction()}
            showRules={() => this.showRules()}

          />
          <Game
           newGameRequest = {() => this.newGameRequest()}
          />
        </div>
      </div>
    );
  }
}

export default App;