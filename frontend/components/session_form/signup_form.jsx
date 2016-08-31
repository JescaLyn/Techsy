import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      gender: "",
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

  updateGender(e) {
    this.setState({ gender: e.target.value });
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

        <label className="radio-buttons">
          <input
            type="radio"
            className="radio"
            name="gender"
            value="female"
            checked={checked("female")}
            onChange={this.updateGender.bind(this)}
          /> Female
          <input
            type="radio"
            className="radio"
            name="gender"
            value="male"
            checked={checked("male")}
            onChange={this.updateGender.bind(this)}
          /> Male
          <input
            type="radio"
            className="radio"
            name="gender"
            value="other"
            checked={checked("other")}
            onChange={this.updateGender.bind(this)}
          /> Other
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

        <button>Register</button>

      </form>
    );
  }
}

export default SignupForm;
