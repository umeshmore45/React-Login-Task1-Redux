import { Component } from "react";
import ToDoFrom from "../component/ToDoFrom";
import ToDoShow from "../component/ToDoShow";

const todoUrl = "http://localhost:5000/task";

class ToDo extends Component {
  state = {
    email: "",
    jwtToken: "",
    todoList: [],
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log("form", event.target.TodoInput.value);
    fetch(todoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.location.state.jwtToken,
      },
      body: JSON.stringify({ taskName: event.target.TodoInput.value }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(async (task) => {
        let taskList = [...this.state.todoList];
        taskList.push(await task);
        this.setState({ todoList: taskList });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    event.target.TodoInput.value = "";
  };

  deleteTask = (event) => {
    console.log(event);
    fetch(`${todoUrl}/${event}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.location.state.jwtToken,
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let taskList = [...this.state.todoList];
        taskList.forEach((task, index) => {
          if (data.taskID === task.taskID) {
            taskList.splice(index, 1);
            this.setState({ todoList: taskList });
          }
        });
      });
  };

  componentDidMount = (event) => {
    console.log(this.props.location.state);
    if (this.props.location.state) {
      this.setState({
        email: this.props.location.state.email,
        jwtToken: this.props.location.state.jwtToken,
      });
      fetch(todoUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.location.state.jwtToken,
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({
            todoList: data,
          });
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    }
  };

  render() {
    return (
      <div>
        {this.props.location.state ? (
          <div>
            <p>
              {this.state.email.substring(0, this.state.email.lastIndexOf("@"))}
            </p>
            <button onClick={this.componentWillUnmount}>Log Out</button>
            <ToDoFrom submitForm={this.submitForm} />
            <ToDoShow todo={this.state.todoList} deleteTask={this.deleteTask} />
          </div>
        ) : (
          <h1>Login First</h1>
        )}
      </div>
    );
  }

  componentWillUnmount = (event) => {
    this.props.history.push({
      pathname: "/",
      state: "",
    });
  };
}

export default ToDo;
