import React, { Component } from "react";

export default class ProjectCard extends Component {
    constructor(props){
        super();
        this.state = {
            project: {},
            projectClicked: false
        };
    }

    componentDidMount(){
        const {projectInfo} = this.props
        const project = this.refs.projectCover
        const projectTitle = this.refs.projectTitle
        projectTitle.style.color = projectInfo.color
        project.style.backgroundImage = projectInfo.backgroundImageUrl
        this.setState({
            project: projectInfo
        })
    }

    render(){
        console.log(this.state.project)
        const {project} = this.state
        return(
            <div ref="projectCover" className="project-slide" >
                {/* pass down the clickEvent from the ProjectDisplay div */}
                <div onClick={this.props.clickEvent} className="project-slide-cover">
                    <div ref="projectTitle" className="project-slide-cover-title">{project.name}</div>
                    <div className="project-slide-cover-tech">{project.technologies}</div>
                    <div className="project-slide-cover-description">{project.description}</div>
                </div>
            </div>
        )
    }
} 