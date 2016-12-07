import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import ModalSessionFormContainer from '../session_form/modal_session_form_container';

class Header extends React.Component {
  constructor() {
    super();

    this.state = { modalOn: false, formType: null };
    this.handleSessionClick = this.handleSessionClick.bind(this);
    this.modalOff = this.modalOff.bind(this);
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

    let otherOptionLink;
    if (this.state.formType) {
      let linkType = this.state.formType === 'signin' ? 'Create An Account' : 'Already Have an Account? Sign In Here';
      let linkURL = this.state.formType === 'signin' ? 'signup' : 'signin';
      otherOptionLink = <a onClick={ this.changeFormType.bind(this, linkURL) }>{ linkType }</a>
    } else {
      otherOptionLink = null;
    }

    return (
      <header className="header">
        <header className="top-header">
          <h1 className="header-logo">CaseNote</h1>
          { userLinks }
        </header>

        <ul className="header-nav">
          <li><Link to="/">Home</Link></li>
          <li><a href="#">All Opinions</a></li>
          <li><a href="#">Add Opinion</a></li>
        </ul>

        <Modal
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalOff }
          style={ ModalStyle }
          contentLabel="Session Modal"
        >

          <span onClick={ this.modalOff } className="modal-close">X</span>
          <ModalSessionFormContainer
            formType={ this.state.formType }
            modalOff={ this.modalOff }
          />
          { otherOptionLink }
        </Modal>
      </header>
    );
  }
}


export default Header;
