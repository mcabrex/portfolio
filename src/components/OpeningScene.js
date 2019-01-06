import React, { Component } from "react";

export class Scene extends Component {
  constructor(props){
    super()
    this.state = {
      position: "",
    }
  }

  componentDidMount() {
    const {scene} = this.refs
    const {position} = this.props
    //grab the position passed from the props and set it to state to change the class 
    this.setState({
      position
    })
    setTimeout(()=>{
        //original height 50vh transitioned here to 10vh (10vh being the height of the main pages black bars)
        scene.style.height = "10vh"
        //1500 here is the minimum time to load scenes
    },1500)
  }

  render() {
    const {position} = this.state
    return (
      <div ref="scene" className={`scene-${position}`}>
      </div>
    );
  }
}

