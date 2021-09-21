import React from "react";
import axios from "axios";

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

  render() {
    let { listUsers } = this.state;
    return (
      <div>
        <div>Lay danh sach user</div>
        {listUsers &&
          listUsers.map((item, index) => {
            return (
              <div key="id">
                {index + 1} - {item.first_name} - {item.last_name}
              </div>
            );
          })}
      </div>
    );
  }
}
export default ListUser;
