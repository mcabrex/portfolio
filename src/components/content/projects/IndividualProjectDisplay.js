import React, { Component } from "react";

export default class IndividualProjectDisplay extends Component {
    constructor(props){
        super();
        this.state = {
        };
    }

    componentDidMount(){
        const imageurl = this.props.imageurl
        console.log('url',imageurl)
        const project = this.refs.projectCover
        console.log('ref',project)
        project.style.backgroundImage = imageurl
    }

    render(){

        return(
            <div ref="projectCover" className="projects-container-display"
            >
            </div>
        )
    }
} 