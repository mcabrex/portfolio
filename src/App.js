import React, { Component } from "react";
import { BlackBar, Content } from "./components";
import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlackBar />
        <Content />
        <BlackBar />
      </div>
    );
  }
}

export default App;
