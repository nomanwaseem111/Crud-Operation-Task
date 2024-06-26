import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Main extends Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

reportWebVitals();
