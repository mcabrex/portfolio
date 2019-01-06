import React, { Component } from "react";

export default class IndividualProjectDisplay extends Component {
    constructor(props){
        super();
        this.state = {
            projectName: "",
        };
    }

    componentDidMount(){
        const {imageurl,projectName,width} = this.props
        const project = this.refs.projectCover
        project.style.backgroundImage = imageurl
        this.setState({
            projectName,
        })
    }

    render(){
        return(
            <div ref="projectCover" id={this.state.projectName} className="projects-container-display" />
        )
    }
} 