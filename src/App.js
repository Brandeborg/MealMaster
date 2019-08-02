import React, { Component } from "react";
import "./App.css";

import NavBar from "./Components/navbar";
import IntroCard from "./Components/intro-card"
import FoodCard from "./Components/food-card"

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <main className="container">
          <IntroCard />
          <FoodCard />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
