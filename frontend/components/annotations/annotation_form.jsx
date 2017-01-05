import React from 'react';
import Quill from 'quill';
import ModalWrapper from '../session_form/modal_wrapper';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { annotateMode: false, modalOn: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.startAnnotateMode = this.startAnnotateMode.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.modalOff = this.modalOff.bind(this);
    this.focusCursor = this.focusCursor.bind(this);
  }

  componentDidUpdate() {
    if (document.getElementById("annoForm") && typeof(this.quill) === 'undefined') {
      this.quill = new Quill('#annoForm');
    }
  }

  componentWillUnmount() {
    this.props.clearPriorRange();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearPriorRange();
    if (this.quill.getText() === "\n") {
      this.props.receiveAnnotationErrors({"body": ["can't be blank"]});
    } else {
      const annotation = {
        body: JSON.stringify(this.quill.getContents()),
        start_idx: this.props.range.index,
        length: this.props.range.length,
        opinion_id: this.props.opinionId
      };
      this.props.createAnnotation(annotation).then((anno) => {
        this.setState({ annotateMode: false, modalOn: false });
        this.props.setPanel("annoDetail");
      });
    }
  }

  startAnnotateMode(e) {
    e.preventDefault();
    this.setState({ annotateMode: true });
  }

  modalOff() {
    this.setState({ modalOn: false });
  }

  handleLogIn(e) {
    e.preventDefault();
    this.setState({ modalOn: true });
  }

  focusCursor() {
    this.quill.focus();
  }

  render() {
    const { location, currentUser } = this.props;

    const initialAsk = (currentUser) ?
      <button onClick={ this.startAnnotateMode }>
        Start the CaseNote Annotation </button> :
      (<div>
        <button onClick={ this.handleLogIn }>
          Sign In to Start Annotating </button>
        <ModalWrapper
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalOff }
          formType="signin" />
      </div>);

    const showForm = (
      <form onSubmit={ this.handleSubmit }>
        <div id="annoForm" onClick={ this.focusCursor }>
        </div>
        <button>Save</button>
      </form>
    );

    const panelDisplay = this.state.annotateMode ? showForm : initialAsk ;

    const divStyle = {
      top: `${ location }px`
    };

    return(
      <div style={ divStyle } className="annotation-create-form">
        { panelDisplay }
      </div>
    );
  }
}

export default AnnotationForm;
