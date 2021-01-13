import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import Todo from "../pages/Todo";
import store from "../redux/store/store";

class RouterRoute extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LogIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/todo" exact component={Todo} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default RouterRoute;
