import React, { Component } from "react";

class Content extends Component {
  state = {
    title: "{  }",
    description: ""
  };

  componentDidMount() {
    this.setState({
      description : "developer. engineer. artist."
    })
    //the whole purpose of this is to create a title that appears letter by letter
    let name = "Mario Leo Cabardo";
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
    for (let i = 0; i < name.length; i++) {
      let letter = name[i];
      timer(letter)
      delay += 150;
    }
  }

  render() {
    const {title,description} = this.state
    return (
      <div className="content">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="projects-container">
          Projects
        </div>
      </div>
    );
  }
}

export default Content;
