import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </>
    );
  }
}

export default Home;
