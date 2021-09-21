import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/about");
    }, 3000);
  }
  render() {
    console.log(">>check: ", this.props);
    return <h1 className="topnav">Hello Home</h1>;
  }
}

export default withRouter(Home);
