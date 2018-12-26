import React, { Component } from "react";
import ProjectDisplay from "./ProjectDisplay";
import Title from "./Title";

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      currentProject: "",
      urls: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

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

  handleClick(evt){
    //grabbing the project name through the background image url
    const {backgroundImage} = evt.target.style
    console.log("evt",backgroundImage.slice(19,backgroundImage.length-6))
  }

  render() {
    const {description} = this.state
    const urls= this.state.urls
    return (
      <div className="content">
        <div className="title" >
          <Title/>
          <h2 className="title-description">{description}</h2>
        </div>
        <div className="projects-container" onClick={this.handleClick}>
          {
            urls.map(imageUrl => <ProjectDisplay key={imageUrl} imageurl={imageUrl}/>)
          }
        </div>
      </div>
    );
  }
}

export default Content;
