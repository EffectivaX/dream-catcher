import React, { Component } from "react";
import axios from "axios";

export class AddDreamer extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const dreamer = {
      username: this.state.username,
    };

    console.log(dreamer);

    axios
      .post("http://localhost:5000/dreamers/add", dreamer)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Create New Dreamer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Dreamer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddDreamer;