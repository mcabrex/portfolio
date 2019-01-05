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
            <div ref="projectCover" className="project-card" >
                {/* pass down the clickEvent from the ProjectDisplay div */}
                <div onClick={this.props.clickEvent} className="project-card-title">
                <div>This is a project</div>
                </div>
            </div>
        )
    }
} 