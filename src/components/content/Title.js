import React, { Component } from "react";

class Title extends Component {
  state = {
    title: "{  }",
  };

  componentDidMount() {
    //the whole purpose of this is to create a title that appears letter by letter
    let title = "Mario Leo Cabardo";
    let newTitleArr = this.state.title.split("");
    let newTitle = "";
    let delay = 200;
    //an initial delay to be incremented during the loop
    const timer = (letter) => setTimeout(() => {
      newTitleArr.splice(newTitleArr.length - 2, 0, letter);
      newTitle = newTitleArr.join("");
      //take the array of the title and insert the current letter into it, then join it and set the state
      this.setState({
        title: newTitle
      });
    }, delay);
    for (let i = 0; i < title.length; i++) {
      let letter = title[i];
      timer(letter)
      //delay keeps getting stacked on, giving the appearance of gradually being typed
      delay += 150;
    }
  }

  render() {
    const {title} = this.state
    return (
      <h1 className="title-title">
        {title}
      </h1>
    );
  }
}

export default Title;
