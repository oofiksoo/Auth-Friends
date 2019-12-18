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
  removeFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(error => {
        console.log(error);
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
          return (
            <div>
              <Friend key={friend.id} data={friend} />
              <button
                className="Delete"
                onClick={() => this.removeFriend(friend.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <AddFriend addFriend={this.addFriend} />
      </div>
    );
  }
}

export default FriendList;
