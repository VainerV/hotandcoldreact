import React from "react";
import Navbar from "./navbar";
import Game from "./game";

class App extends React.Component {
    constructor() {
    super();
  }

  render() {
    return(
      <div className="application">
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
