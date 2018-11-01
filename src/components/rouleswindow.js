import React from "react";
import Game from './game';

class Rouleswindow extends React.Component {
    constructor(props) {
    super(props);

  }


  render() {
    return(
      <div className="roules-window">
        What do I do?
This is a Hot or Cold Number Guessing Game. The game goes like this:
1. I pick a random secret number between 1 to 100 and keep it hidden.
2. You need to guess until you can find the hidden secret number.
3. You will get feedback on how close ("hot") or far ("cold") your guess is.
So, Are you ready?

<button>Lets Go</button>
      </div>
    );
  }
}

export default Rouleswindow;