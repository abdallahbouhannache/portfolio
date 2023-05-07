import React, { Component } from "react";
import axios from "axios";

import Home from "./components/Home";
import {FloatingSocials} from "./components/elemenst";

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    welcome: "..."
  };

  // componentDidMount = async () => {
  //   try {
  //     const res = await axios.get("/welcome");
  //     console.log(res);
  //     this.setState({ welcome: res.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
/* <h1>"Hello server!" says the client</h1>
<h1>"{this.state.welcome}" says the server</h1> */

  render() {
    return (
      <div className="App">
        {/* <Login/> */}
        {/* <FloatingSocials /> */}
        <Home/>
        
      </div>
    );
  }
}

export default App;