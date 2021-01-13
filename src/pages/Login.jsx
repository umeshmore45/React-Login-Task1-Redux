import { Component } from "react";
import { connect } from "react-redux";
import LogInFrom from "../component/LogInFrom";
import userActionGentretor from "../redux/actions/userAction.gentreator";
import { userActionType } from "../redux/constant/userAction.types";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    message: [],
    jwtToken: {},
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  changeRoute = (event) => {
    if (this.state.jwtToken) {
      this.props.history.push({
        pathname: "/todo",
        state: this.state,
      });
    }
  };
  LogInSubmit = (event) => {
    event.preventDefault();
    this.props.Login();
  };

  render() {
    return (
      <>
        <h1>Log In</h1>
        <LogInFrom
          LogInSubmit={this.LogInSubmit}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
        />
        <p>{this.state.message.message}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    Login: (user) => {
      return dispacth(userActionGentretor(userActionType.LOGIN, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
