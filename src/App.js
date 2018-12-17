import React, { Component } from "react";
import logo from "./logo.svg";
import Todo from "./Todo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: {
        task: "",
        status: ""
      }
    };
  }

  renderTodos() {
    return this.state.todos.map((item, index) => (
      <Todo
        todo={item}
        handleDelete={() => this.handleDelete(index)}
        handleDone={() => this.handleDone(index)}
        key={index}
      />
    ));
  }

  handleChange = e => {
    this.setState({ currentTodo: { task: e.target.value, status: "" } });
  };
  handleSubmit = () => {
    const todosList = this.state.todos.slice();
    todosList.push(this.state.currentTodo);
    this.setState({ todos: todosList, currentTodo: { task: "", status: "" } });
    console.log(this.state.todos);
  };
  handleDone(index) {
    let todosList = this.state.todos.slice();
    todosList[index].status = "completed";
    this.setState({ todos: todosList, currentTodo: { task: "", status: "" } });
  }
  handleDelete(index) {
    console.log("AM HERE", index);
    let todosList = this.state.todos.slice();
    todosList.splice(index, 1);
    this.setState({ todos: todosList });
  }

  render() {
    return (
      <div className="App">
      <h1>Todo App</h1>
        <input
          placeholder="enter todo"
          onChange={this.handleChange}
          value={this.state.currentTodo.task}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.todos.length === 0 ? (
          <h1>There's nothing to do</h1>
        ) : (
          this.renderTodos()
        )}
      </div>
    );
  }
}

export default App;
