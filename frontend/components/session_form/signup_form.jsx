import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      username: ""
    };
  }

  update(field, event) {
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup({ user: this.state });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="session-form">

        <label>First Name:
          <input
            type="text"
            className="text"
            value={this.state.fname}
            onChange={this.update.bind(this, "fname")}
          />
        </label>

        <label>Last Name:
          <input
            type="text"
            className="text"
            value={this.state.lname}
            onChange={this.update.bind(this, "lname")}
          />
        </label>

        <label>Email:
          <input
            type="text"
            className="text"
            value={this.state.email}
            onChange={this.update.bind(this, "email")}
          />
        </label>

        <label>Password:
          <input
            type="password"
            className="text"
            onChange={this.update.bind(this, "password")}
          />
        </label>

        <label>Confirm Password:
          <input type="password" className="text" />
        </label>

        <label>Username:
          <input
            type="text"
            className="text"
            value={this.state.username}
            onChange={this.update.bind(this, "username")}
          />
        </label>

        <button className="button">Register</button>

      </form>
    );
  }
}

export default SignupForm;
