import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from "./components/profilePage"


class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <ProfilePage></ProfilePage>
      </div>
    );
  }
}

export default App;