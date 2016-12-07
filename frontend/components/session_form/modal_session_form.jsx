import React from 'react';
import { Link } from 'react-router';

class ModalSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.modalOff();
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const formType = this.props.formType;
    const formTitle = formType === 'signin' ? 'Sign In to' : 'Sign Up for';

    const errors = this.props.formErrors[formType].errors;

    return(
      <div className="modal-session-form">
        <h2>{formTitle} CaseNote</h2>

        <form onSubmit={ this.handleSubmit }>
          <input type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange("username")}>
          </input>

          <br />

          <input type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}>
          </input>

          <ul>
            { errors.map((err) => <li>{ err }</li>) }
          </ul>

          <input type="submit" value={ formTitle.slice(0,8) }></input>

        </form>
      </div>
    );
  }
}

export default ModalSessionForm;
