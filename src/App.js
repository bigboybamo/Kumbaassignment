import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from "./components/profilePage"
// import OrderSummary from "./components/orderSummary"


class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App">
        <ProfilePage></ProfilePage>
        {/* <OrderSummary></OrderSummary> */}
      </div>
    );
  }
}

export default App;