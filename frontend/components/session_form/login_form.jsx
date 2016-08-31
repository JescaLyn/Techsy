import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  update(field, event) {
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({ user: this.state });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="session-form">

        <label>Username:
          <input
            type="text"
            className="text"
            value={this.state.username}
            onChange={this.update.bind(this, "username")}
            />
        </label>

        <label>Password:
          <input
            type="password"
            className="text"
            onChange={this.update.bind(this, "password")}
          />
        </label>

        <button className="button">Login</button>

      </form>
    );
  }
}

export default LoginForm;
