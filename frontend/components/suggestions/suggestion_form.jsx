import React from 'react';
import ModalWrapper from '../session_form/modal_wrapper';
import Thumb from '../header/thumb';

class SuggestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      suggestion_type: "other",
      formClass: "",
      // fullForm: false,
      modalOn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showFullForm = this.showFullForm.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.modalOff = this.modalOff.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { body, suggestion_type } = this.state;
    const suggestion = {
      body,
      suggestion_type,
      annotation_id: this.props.annotationId
    };

    this.props.createSuggestion(suggestion).then(
      () => this.setState({ body: "", suggestion_type: "", formClass: "" })
    );
  }

  modalOff() {
    this.setState({ modalOn: false });
  }

  handleLogIn(e) {
    e.preventDefault();
    this.setState({ modalOn: true });
  }

  showFullForm(e) {
    e.preventDefault();
    this.setState({ formClass: "full-mode" });
  }

  loginButton() {
    if (this.state.formClass === "full-mode") {
      if (this.props.currentUser) {
        return null;
      } else {
        return <button onClick={ this.handleLogIn }>
          Log In to Make Suggestion
        </button>;
      }
    } else {
      return null;
    }
  }

  typeButtons() {
    if (this.state.formClass === "full-mode") {
      return(
        <div className="suggestion-form-radios">
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="restate"
              name="suggestion_type"
              value="restate"
              checked={ this.state.suggestion_type === "restate"}
              onChange={ this.update('suggestion_type')} />
            <label htmlFor="restate">Restates the text</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="missing"
              name="suggestion_type"
              value="missing"
              checked={ this.state.suggestion_type === "missing"}
              onChange={ this.update('suggestion_type')}  />
            <label htmlFor="missing">Missing something</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="stretch"
              name="suggestion_type"
              value="stretch"
              checked={ this.state.suggestion_type === "stretch"}
              onChange={ this.update('suggestion_type')}  />
            <label htmlFor="stretch">It's a stretch</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="other"
              name="suggestion_type"
              value="other"
              checked={ this.state.suggestion_type === "other"}
              onChange={ this.update('suggestion_type')} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  submitButtons() {
    if (this.state.formClass === "full-mode") {
      return(
        <button>Submit</button>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.currentUser) {
      let placeholder;
      if (this.state.formClass === "") {
        placeholder = "Suggest an improvement";
      } else {
        placeholder = (this.state.suggestion_type === "other") ?
        "Suggest an improvement (required)" :
        "Suggest an improvement (optional)";
      }

      let formClasses = `suggestion-form ${this.state.formClass}`;

      return(
        <div>
          { this.loginButton() }
          <form onSubmit={ this.handleSubmit } className={ formClasses }>
            { this.typeButtons() }
            <textarea
              value={ this.state.body }
              placeholder={ placeholder }
              onFocus={ this.showFullForm }
              onChange={ this.update('body')} />
            { this.submitButtons() }
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <button className="suggestion-sign-in" onClick={ this.handleLogIn }>
            Sign In to Make a Suggestion
          </button>

          <ModalWrapper
            isOpen={ this.state.modalOn }
            onRequestClose={ this.modalOff }
            formType="signin" />
        </div>
      );
    }
  }
}

export default SuggestionForm;
