import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push("/"));
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const formType = this.props.formType;
    const formTitle = formType === 'signin' ? 'Sign In' : 'Sign Up';

    const linkType = formType === 'signin' ? 'Sign Up' : 'Sign In';
    const linkURL = formType === 'signin' ? 'signup' : 'signin';

    const errors = this.props.formErrors[formType].errors;

    return(
      <div className="session-form">
        <h2 className="signup-item"><Link to="/signup">Sign Up</Link></h2>
        <h2 className="signup-item"><Link to="/signin">Sign In</Link></h2>
        <form onSubmit={ this.handleSubmit }>

          <label>Username
            <input type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange("username")}>
            </input>
          </label>

          <label>Password
            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}>
            </input>
          </label>

          <ul>
            { errors.map((err) => <li>{ err }</li>) }
          </ul>

          <input type="submit" value={ formTitle }></input>

        </form>
      </div>
    );
  }
}

export default SessionForm;
