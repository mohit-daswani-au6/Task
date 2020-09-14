import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
        <Redirect to="/signin" />
      </Switch>
    </div>
  );
}

export default App;
