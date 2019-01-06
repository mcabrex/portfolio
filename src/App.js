import React, { Component } from "react";
import { BlackBar, Content, Scene } from "./components";
import "./styles/index.scss";

class App extends Component {
  state = {
    opened: true
  }

  componentDidMount(){
    //opened prop on state used to determine whether to show the 
    //opening scene or the main page 
    setTimeout(()=>{
      this.setState({
        opened: false
      })
      //time has to be higher than the height timeout function 
      //in the used element (Scene component in this case(1500)) plus the transition length (2000)
    },3500)
  }

  render() {
    const {opened} = this.state
    //the two options to load, the opening scene and the actual page
    const mainpage = () => {
      return (
        <div ref="app" className="App">
          <BlackBar />
          <Content />
          <BlackBar />
        </div>
      )
    }
    const openingScene = () => {
      return (
        <React.Fragment>
          <Scene position="top" />
          <Scene position="bottom" />
        </React.Fragment>
      )
    }
    //use a ternary based on the state to transition between the two
    return (
      <React.Fragment>
        {
          opened ? openingScene() : mainpage()
        }
      </React.Fragment>
    );
  }
}

export default App;
