import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./routes/PrivateRoute";
import AlertMsg from "./components/AlertMsg";

function App() {
  return (
    <>
      <Router>
        <AlertMsg />
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <Route exact path='/login' component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
