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
        project.style.backgroundImage = projectInfo.backgroundImageUrl
    }

    render(){
        return(
            <div ref="projectCover" className="project-slide" >
                {/* pass down the clickEvent from the ProjectDisplay div */}
                <div onClick={this.props.clickEvent} className="project-slide-cover">
                    <div className="project-slide-cover-title">This is a project name</div>
                    <div className="project-slide-cover-tech">These are the technologies used</div>
                    <div className="project-slide-cover-description">This is the project descriptioN!</div>
                </div>
            </div>
        )
    }
} 