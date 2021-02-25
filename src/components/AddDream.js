import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { render } from "@testing-library/react";

export default class AddDream extends React.Component() {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      theme: "",
      date: new Date(),

      dreamers: [],
    };
  }

  // eslint-disable-next-line no-undef
  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          dreamers: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeTheme = (e) => {
    this.setState({
      theme: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const dream = {
      username: this.state.username,
      description: this.state.description,
      theme: this.state.theme,
      date: this.state.date,
    };

    console.log(dream);

    //database connection
    axios
      .post("http://localhost:5000/dreams/add", dream)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Add New Dream</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.dreamers.map(function (dreamer) {
                return (
                  <option key={dreamer} value={dreamer}>
                    {dreamer}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Theme </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.theme}
              onChange={this.onChangeTheme}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Dream Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
