import React from 'react';
import SignUpForm from './signup_form';
import LoginForm from './login_form';

class SessionTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.text === "Register") {
      this.props.setModalRegister();
    } else {
      this.props.setModalLogin();
    }
    this.props.clearErrors();
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let form;
    let registerClass;
    let loginClass;

    if (this.props.modalType === "register") {
      form = <SignUpForm
        signup={this.props.signup}
        />;
      registerClass = "active";
      loginClass = "inactive";
    } else {
      form = <LoginForm
        login={this.props.login}
        />;
      loginClass = "active";
      registerClass = "inactive";
    }

    return (
      <div className="session-tabs-box">
        <ul className="session-tabs">
          <li className={registerClass + " session-tab"}>
            <a href="#" onClick={this.handleClick}>Register</a>
          </li>
          <li className={loginClass + " session-tab"}>
            <a href="#" onClick={this.handleClick}>Login</a>
          </li>
        </ul>
        <div className="session-form-box">
          { this.renderErrors() }
          {form}
        </div>
      </div>
    );
  }
}

export default SessionTabs;
