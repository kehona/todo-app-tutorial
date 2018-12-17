import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className="task">
        <p className={`${this.props.todo.status}`}>{this.props.todo.task}</p>
        <button onClick={this.props.handleDelete}>delete</button>
        <button onClick={this.props.handleDone}>done</button>
      </div>
    );
  }
}

export default Todo;
