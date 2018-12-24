import React, { Component } from "react";

export default class ProjectDisplay extends Component {
    constructor(props){
        super();
        this.state = {
        }
    }

    componentDidMount(){
        const imageurl = this.props.imageurl
        const project = this.refs.projectCover
        project.style.backgroundImage = imageurl
    }

    render(){
        return(
            <div ref="projectCover" className="projects-display">
            </div>
        )
    }
} 