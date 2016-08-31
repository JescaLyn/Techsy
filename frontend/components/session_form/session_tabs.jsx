import React from 'react';
import SignUpForm from './signup_form';
import LoginForm from './login_form';

class SessionTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: "active",
      login: "inactive"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.text === "Register") {
      this.setState({ register: "active", login: "inactive" });
    } else {
      this.setState({ register: "inactive", login: "active" });
    }
  }

  render() {
    let form;

    if (this.state.register === "active") {
      form = <SignUpForm
        signup={this.props.signup}
        errors={this.props.errors}
        />;
    } else {
      form = <LoginForm
        login={this.props.login}
        errors={this.props.errors}
        />;
    }

    return (
      <div className="session-tabs-box">
        <ul className="session-tabs">
          <li className={this.state.register + " session-tab"}>
            <a href="#" onClick={this.handleClick}>Register</a>
          </li>
          <li className={this.state.login + " session-tab"}>
            <a href="#" onClick={this.handleClick}>Login</a>
          </li>
        </ul>
        <div className="session-form-box">
          {form}
        </div>
      </div>
    );
  }
}

export default SessionTabs;
