import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    task: "",
    tasklist: [],
    iscompleted: []
  };
  changeHandler = event => {
    this.setState({ task: event.target.value });
  };
  addHandler = () => {
    if (this.state.task.trim() !== "")
      this.setState({
        task: "",
        tasklist: [...this.state.tasklist, this.state.task],
        iscompleted: [...this.state.iscompleted, false]
      });
    console.log(this.state.tasklist);
  };
  completeHandler = index => {
    let arr = [...this.state.iscompleted];
    arr[index] = !this.state.iscompleted[index];
    this.setState({ iscompleted: arr });
  };
  removeHandler = index => {
    let arr = [...this.state.tasklist];
    this.setState({ tasklist: arr.filter((e, i) => i !== index) });
  };

  render() {
    return (
      <div className="App w-50 p-4 m-auto border border-primary">
        <div className="border border-primary p-4">
          <h1 className="text-right font-weight-bold text-primary m-3">
            To-Do App!!
          </h1>
          <h5 className="text-right text-primary m-3">Add New To-Do</h5>
          <input
            type="text"
            placeholder="Enter new task"
            className="rounded w-100 p-3 m-2 text-primary"
            id="new-task"
            onChange={this.changeHandler}
            value={this.state.task}
          />
          <div className="d-flex justify-content-end m-2">
            <button
              className="btn btn-primary btn-outline-primary border-primary pl-3 pr-3 btn-lg"
              id="add"
              onClick={this.addHandler}
            >
              Add
            </button>
          </div>
        </div>
        <h2 className="text-center m-5 text-primary">
          Let's get some work done
        </h2>

        <ul className="list-group list-group-flush">
          {this.state.tasklist.map((e, i) => (
            <li key={i} className="list-group-item row text-left">
              <button
                className="btn btn-danger m-1 col-2"
                onClick={() => this.removeHandler(i)}
              >
                remove
              </button>
              <button
                className={
                  "btn m-1 col-2 " +
                  (this.state.iscompleted[i]
                    ? " btn-secondary"
                    : " btn-primary")
                }
                onClick={() => this.completeHandler(i)}
              >
                {!this.state.iscompleted[i] ? "Complete" : "Undo"}
              </button>
              <span
                className={
                  "col-2 " +
                  (this.state.iscompleted[i] ? "text-secondary task-comp" : "")
                }
              >
                {e}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
