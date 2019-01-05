import React, { Component } from "react";
import IndividualProjectDisplay from "./IndividualProjectDisplay";
import ProjectCard from "./ProjectCard";
import {projectList} from "./projectInformation";

export default class ProjectDisplays extends Component {
  constructor(props) {
    super();
    this.state = {
      currentProject: {},
      projectList: [],
      projectClicked: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      projectList
    });
  }

  handleClick(evt){
    const projectName = evt.target.id
    const currentClickedState = this.state.projectClicked
    const {projectList} = this.state
    let currentProject = {}
    projectList.forEach(project =>{
      if(project.name === projectName) currentProject = project
    })
    if(evt.target.className !== "projects-container"){
      this.setState({
        projectClicked: !currentClickedState,
        currentProject
      })
    } 
  }

  render() {
    const { currentProject, projectClicked, projectList } = this.state;
    return (
      <div onClick={this.handleClick} className="projects-container">
        {
          projectClicked ? 
          <ProjectCard 
            clickEvent={this.handleClick}
            projectInfo={currentProject}
          /> :
          projectList.map(project => {
          //destructure the backgroundImageUrl property on the project object, pass it down as a prop
          let { backgroundImageUrl } = project;
          return (
            <IndividualProjectDisplay
              key={project.name}
              projectName={project.name}
              imageurl={backgroundImageUrl}
            />
          );
          })
        }
      </div>
    );
  }
}
