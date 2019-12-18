import React from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")

      .then(res => {
        console.log(res);

        this.setState({
          friends: res.data
        });
      })

      .catch(err => {
        console.log(err);
      });
  };

  addFriend = friend => {
    axiosWithAuth()
      .post(
        "http://localhost:5000/api/friends",
        JSON.parse(JSON.stringify(friend))
      )

      .then(res => {
        this.getData();
      })

      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="FriendContainer">
        {this.state.friends.map(friend => {
          return <Friend key={friend.id} data={friend} />;
        })}
        <AddFriend addFriend={this.addFriend} />
      </div>
    );
  }
}

export default FriendList;
