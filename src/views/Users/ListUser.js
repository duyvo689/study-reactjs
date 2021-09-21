import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleViewDetail = (user) => {
    console.log("check : ", this.props);
    this.props.history.push(`./user/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div>
        <div>Lay danh sach user</div>
        {listUsers &&
          listUsers.map((item, index) => {
            return (
              <div key="id" onClick={() => this.handleViewDetail(item)}>
                {index + 1} - {item.first_name} - {item.last_name}
              </div>
            );
          })}
      </div>
    );
  }
}
export default withRouter(ListUser);
