import React, { Component } from "react";
import Header from "../../components/header";
import Timer from "../timer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Timer />
      </React.Fragment>
    );
  }
}

export default App;
