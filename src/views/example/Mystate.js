import React from "react";
import Myform from "./Myform";
import Myprops from "./Myprops";

class Mystate extends React.Component {
  state = {
    name: "Duy Vo",
    age: "21",
    arrjob: [
      { id: "1", title: "IT", salary: "HCM" },
      { id: "2", title: "safe", salary: "HN" },
      { id: "3", title: "marketing", salary: "DN" },
    ],
  };

  handleOnChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  addNewJob = (job) => {
    console.log("check job", job);
    this.setState({
      arrjob: [...this.state.arrjob, job],
    });
  };

  deleteAJob = (job) => {
    let currentjob = this.state.arrjob;
    currentjob = currentjob.filter((item) => item.id !== job.id);
    this.setState({
      arrjob: currentjob,
    });
  };
  render() {
    return (
      <>
        <Myform addNewJob={this.addNewJob} />
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleOnChangeName(event)}
        />
        <p>Hello world with React.js {this.state.name}</p>

        {/* <Myform /> */}

        <Myprops
          name={this.state.name}
          age={"21"}
          arrjob={this.state.arrjob}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default Mystate;
