import React, { Component } from "react";

export default class ProjectCard extends Component {
    constructor(props){
        super();
        this.state = {
            project: {}
        };
    }

    componentDidMount(){
        const imageurl = this.props.imageurl
        const project = this.refs.projectCover
        project.style.backgroundImage = imageurl
    }

    render(){
        return(
            <div ref="projectCover" className="project-card" >
                <h1>Project Name</h1>
            </div>
        )
    }
} 