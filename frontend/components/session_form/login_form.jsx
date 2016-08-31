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
    this.props.signup({ user: this.state });
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const checked = value => {
      if (this.state.gender === value) {
        return "checked";
      } else {
        return "";
      }
    };

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
        { this.renderErrors() }

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

        <button>Login</button>

      </form>
    );
  }
}

export default LoginForm;
