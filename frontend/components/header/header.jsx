import React from 'react';
import { Link, withRouter } from 'react-router';
import ModalWrapper from '../session_form/modal_wrapper';

class Header extends React.Component {
  constructor() {
    super();

    this.state = { modalOn: false, formType: null };
    this.handleSessionClick = this.handleSessionClick.bind(this);
    this.modalOff = this.modalOff.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.modalOff = this.modalOff.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }

  handleSessionClick(e) {
    e.preventDefault();
    this.setState({ modalOn: true, formType: e.currentTarget.name });
  }

  modalOff() {
    this.setState({ modalOn: false });
  }

  changeFormType(newType) {
    this.setState({ formType: newType });
  }

  checkLoggedIn(e) {
    if (this.props.currentUser) {
      this.props.router.push("/new");
    } else {
      this.setState({ modalOn: true, formType: "signin"});
    }
  }

  render() {
    let userLinks;

    if (this.props.currentUser) {
      userLinks = (
        <ul className="header-user-links">
          <li>{ this.props.currentUser.username }</li>
          <li onClick={ this.props.logout }><a>Sign Out</a></li>
        </ul>
      );
    } else {
      userLinks = (
        <ul className="header-user-links">
          <li><a href="#" name="signup" onClick={this.handleSessionClick}>Sign Up</a></li>
          <li><a href="#" name="signin" onClick={this.handleSessionClick}>Sign In</a></li>
        </ul>
      );
    }

    return (
      <header className="header">
        <header className="top-header">
          <h1 className="header-logo">CaseNote</h1>
          { userLinks }
        </header>

        <ul className="header-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/index">All Opinions</Link></li>
          <li><Link onClick={ this.checkLoggedIn }>Add Opinion</Link></li>
        </ul>

        <ModalWrapper
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalOff }
          formType={ this.state.formType } />

      </header>
    );
  }
}


export default withRouter(Header);
