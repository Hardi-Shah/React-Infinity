import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InnerPage from "./pages/InnerPage";
import Header2 from "./components/Header/new";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/header" component={Header} />
          <Route exact path="/sidebar" component={Sidebar} /> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/header" component={Header2} />
          <Route exact path="/innerpage" component={InnerPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
