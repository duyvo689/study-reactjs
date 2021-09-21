import React from "react";

class Myform extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleOnChangefName(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleOnChangelName(event) {
    this.setState({
      salary: event.target.value,
    });
  }
  handleOnClickSubmit(event) {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("nhap vao th ngu");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  }
  render() {
    return (
      <>
        <div className="App">
          <form action="/action_page.php">
            <label htmlFor="title">First name:</label>
            <br />
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={(event) => this.handleOnChangefName(event)}
            />
            <br />
            <label htmlFor="salary">Last name:</label>
            <br />
            <input
              type="text"
              id="salary"
              value={this.state.salary}
              onChange={(event) => this.handleOnChangelName(event)}
            />
            <br />
            <input
              type="submit"
              onClick={(event) => {
                this.handleOnClickSubmit(event);
              }}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Myform;
