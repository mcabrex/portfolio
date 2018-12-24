import React, { Component } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Title from "./Title";
class Content extends Component {
  state = {
    title: "{  }",
    description: "",
    urls: []
  };

  componentDidMount() {
    this.setState({
      description : "developer. engineer. artist.",
      urls: [
        "url('/cover-images/TheoryScript.png')",
        "url('/cover-images/TabTracker.png')",
        "url('/cover-images/DungeonMaster.png')",
        "url('/cover-images/Crossover.png')"
      ]
    })
  }

  render() {
    const {description} = this.state
    const urls= this.state.urls
    return (
      <div className="content">
        <Title />
        <h2>{description}</h2>
        <div className="projects-container">
        {
          urls.map(imageUrl => <ProjectDisplay imageurl={imageUrl}/>)
        }
        </div>
      </div>
    );
  }
}

export default Content;
