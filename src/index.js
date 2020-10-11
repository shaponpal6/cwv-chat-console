import React from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext } from "./firebase";

// import TodoApp from "./TodoApp";
import App from './App'
import "./index.css";

// import Auth from "./containers/Auth";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </div>,
  document.getElementById("wpcwvAdmin")
);

serviceWorker.unregister();
