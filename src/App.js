import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import PostManagementDashboard from "./Components/PostManagementDashboard/PostManagementDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostManagementDashboard />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
