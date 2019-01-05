import React, { Component } from "react";
import IndividualProjectDisplay from "./IndividualProjectDisplay";
import ProjectCard from "./ProjectCard";

export default class ProjectDisplays extends Component {
  constructor(props) {
    super();
    this.state = {
      currentProject: {},
      projects: {},
      projectClicked: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    //urls for the project covers in the public folder
    const urls = [
      "url('/cover-images/TabTracker.png')",
      "url('/cover-images/TheoryScript.png')",
      "url('/cover-images/Crossover.png')",
      "url('/cover-images/DungeonMaster.png')"
    ];
    const projects = {};
    //grab the project names from the urls array and map individual projects to the projects obj
    urls.forEach(url => {
      let projectName = url.slice(19, url.length - 6);
      projects[projectName] = Object.assign({ backgroundImageUrl: url });
    });
    this.setState({
      projects
    });
  }

  handleClick(evt){
    const projectImageUrl = evt.target.style.backgroundImage 
    const projectName = projectImageUrl.slice(19, projectImageUrl.length - 6);
    const currentClickedState = this.state.projectClicked
    const {projects} = this.state
    console.log(projects)
    const currentProject = projects[projectName]
    if(evt.target.className !== "projects-container"){
      this.setState({
        projectClicked: !currentClickedState,
        currentProject
      })
    } 
  }

  render() {
    const { currentProject, projectClicked, projects } = this.state;
    return (
      <div onClick={this.handleClick} ref="projectCover" className="projects-container">
        {
          projectClicked ? 
          <ProjectCard 
            clickEvent={this.handleClick}
            projectInfo={currentProject}
          /> :
          Object.keys(projects).map(project => {
          //destructure the backgroundImageUrl property on the project object, pass it down as a prop
          let { backgroundImageUrl } = projects[project];
          return (
            <IndividualProjectDisplay
              ref={project}
              key={backgroundImageUrl}
              imageurl={backgroundImageUrl}
            />
          );
          })
        }
      </div>
    );
  }
}
