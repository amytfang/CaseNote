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
      let linkType = this.state.formType === 'signin' ?
        'Create An Account' : 'Already Have an Account? Sign In Here';
      let linkURL = this.state.formType === 'signin' ? 'signup' : 'signin';
      otherOptionLink = <a onClick={ this.changeFormType.bind(this, linkURL) } >
        { linkType }
      </a>;
    } else {
      otherOptionLink = null;
    }

    let { isOpen, onRequestClose } = this.props;

    return (
      <Modal
        isOpen={ isOpen }
        onRequestClose={ onRequestClose }
        style={ ModalStyle }
        contentLabel="Session Modal"
        >

        <span onClick={ onRequestClose } className="modal-close">X</span>
        <div onMouseDown={ e => e.stopPropagation() }>
          <ModalSessionFormContainer
            formType={ this.state.formType }
            modalOff={ onRequestClose }
            />
          { otherOptionLink }
        </div>
      </Modal>
    );

  }
}

export default ModalWrapper;
