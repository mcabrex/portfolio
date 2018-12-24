import React, { Component } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Title from "./Title";
class Content extends Component {
  state = {
    description: "",
    urls: []
  };

  componentDidMount() {
    this.setState({
      description : "developer. engineer. another buzzword.",
      urls: [
        "url('/cover-images/TabTracker.png')",
        "url('/cover-images/TheoryScript.png')",
        "url('/cover-images/Crossover.png')",
        "url('/cover-images/DungeonMaster.png')",
      ]
    })
  }

  render() {
    const {description} = this.state
    const urls= this.state.urls
    return (
      <div className="content">
        <div className="title">
          <Title />
          <h2>{description}</h2>
        </div>
        <div className="projects-container">
        {
          urls.map(imageUrl => <ProjectDisplay key={imageUrl} imageurl={imageUrl}/>)
        }
        </div>
      </div>
    );
  }
}

export default Content;
