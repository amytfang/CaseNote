import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import ModalSessionFormContainer from './modal_session_form_container';

class ModalWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = { formType: 'signin' };
    this.changeFormType = this.changeFormType.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.setState({ formType: newProps.formType });
    }
  }

  changeFormType(newType) {
    this.setState({ formType: newType });
  }

  render() {
    let otherOptionLink;
    if (this.state.formType) {
      let linkType = this.state.formType === 'signin' ? 'Create An Account' : 'Already Have an Account? Sign In Here';
      let linkURL = this.state.formType === 'signin' ? 'signup' : 'signin';
      otherOptionLink = <a onClick={ this.changeFormType.bind(this, linkURL) }>{ linkType }</a>
    } else {
      otherOptionLink = null;
    }

    return (
      <Modal
        isOpen={ this.props.isOpen }
        onRequestClose={ this.props.onRequestClose }
        style={ ModalStyle }
        contentLabel="Session Modal"
        >

        <span onClick={ this.props.onRequestClose } className="modal-close">X</span>
        <ModalSessionFormContainer
          formType={ this.state.formType }
          modalOff={ this.props.onRequestClose }
          />
        { otherOptionLink }
      </Modal>
    );

  }
}

export default ModalWrapper;
