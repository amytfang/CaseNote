import React from 'react';
import Quill from 'quill';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { annotateMode: false, modalOn: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.startAnnotateMode = this.startAnnotateMode.bind(this);
    this.modalOn = this.modalOn.bind(this);
  }

  componentDidUpdate() {
    if (document.getElementById("annoForm") && typeof(this.quill) === 'undefined') {
      this.quill = new Quill('#annoForm');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const annotation = {
      body: JSON.stringify(this.quill.getContents()),
      start_idx: this.props.range.index,
      length: this.props.range.length,
      opinion_id: this.props.opinionId
    };
    this.props.createAnnotation(annotation).then(
      () => location.reload()
    );
  }

  startAnnotateMode(e) {
    e.preventDefault();
    this.setState({ annotateMode: true });
  }

  modalOn() {

  }

  render() {
    const { location, currentUser } = this.props;

    const initialAsk = (currentUser) ?
      <button onClick={ this.startAnnotateMode }>
        Start the CaseNote Annotation </button> :
      <button onClick={ this.modalOn }>
        Sign In to Start Annotating </button> ;

    const showForm = (
      <form onSubmit={ this.handleSubmit }>
        <div id="annoForm">
          <p>Add your thoughts!</p>
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
