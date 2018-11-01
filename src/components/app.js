import React from "react";
import Navbar from "./navbar";
import Game from "./game";

class App extends React.Component {
  constractor(props) {
    super(props);
  }

  render() {
    retrun(
      <div className="application">
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
