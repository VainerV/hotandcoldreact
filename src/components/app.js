import React from "react";
import Navbar from "./navbar";
import Game from "./game";


class App extends React.Component {
    constructor() {
    super();
  }

  

  render() {
    return(
        <div>
        <header>
        <h1>Hot or Cold</h1>
        <p>Guessing game in React</p>
      </header> 
      <div className="application">
        <Navbar />
        <Game />
      </div>
      </div>
    );
  }
}

export default App;
