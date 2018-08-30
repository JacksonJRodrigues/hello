import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import Counter from "./components/counter";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Counter />, document.getElementById("root"));
//ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
