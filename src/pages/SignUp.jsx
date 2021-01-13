import { Component } from "react";
import { connect } from "react-redux";
import Signform from "../component/Signform";
import userActionGentretor from "../redux/actions/userAction.gentreator";
import { userActionType } from "../redux/constant/userAction.types";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  updateConPassWord = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  changeRoute = () => {
    this.props.history.push({
      pathname: "/",
      state: this.props.state,
    });
  };

  SignUpSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.confirmPassword);
    let user = { ...this.state };
    this.props.SignUp(user);
    this.changeRoute();
  };

  render() {
    return (
      <>
        <h1>SignUp</h1>
        <Signform
          SignUpSubmit={this.SignUpSubmit}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updateConPassWord={this.updateConPassWord}
        />
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
    SignUp: (user) => {
      return dispacth(userActionGentretor(userActionType.SIGNUP, { user }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
