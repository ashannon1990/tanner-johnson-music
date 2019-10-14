import React, { Component } from "react";
import API from "../../utils/API"

class AdminSignUp extends Component {
  state = {
    username: "",
    password: ""
  }

  register = event => {
    event.preventDefault();
      API.register({
          username: this.state.username.toLowerCase(),
          password: this.state.password
      })
      .then((res) => console.log(res))
          .catch(err => {
            console.log(err);
            this.setState({ error: "A server error has occured." });
          });

          this.setState({
            password: "",
            confirm: ""
          });

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      
    });
    console.log(this.state);

  };
  render() {
    return (
      <div>
        <h2>New username and password</h2>
        <form action="/login" method="post">
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              label="username"
              placeholder="new username" />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              label="Password"
              placeholder="new password" />
            <br />
            <input
              type="submit"
              value="Sign Up"
              onClick={this.register} />
          </div>
        </form>
      </div>
    )

  }
}

export default AdminSignUp;