import React from 'react';

class SuggestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      suggestion_type: "other",
      fullForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showFullForm = this.showFullForm.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { body, suggestion_type } = this.state;
    const suggestion = { body, suggestion_type, annotation_id: this.props.annotationId };
    this.props.createSuggestion(suggestion).then(
      () => this.setState({ body: "", suggestion_type: "" })
    );
  }

  showFullForm(e) {
    e.preventDefault();
    this.setState({ fullForm: true });
    $(".suggestion-form").addClass("full-mode");
  }

  loginButton() {
    if (this.state.fullForm) {
      if (this.props.currentUser) {
        return null;
      } else {
        return <button>Log In to Make Suggestion</button>;
      }
    } else {
      return null;
    }
  }

  typeButtons() {
    if (this.state.fullForm) {
      return(
        <div className="suggestion-form-radios">
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="restate"
              name="suggestion_type"
              value="restate"
              onClick={ this.update('suggestion_type')} />
            <label htmlFor="restate">Restates the text</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="missing"
              name="suggestion_type"
              value="missing"
              onClick={ this.update('suggestion_type')} />
            <label htmlFor="missing">Missing something</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="stretch"
              name="suggestion_type"
              value="stretch"
              onClick={ this.update('suggestion_type')} />
            <label htmlFor="stretch">It's a stretch</label>
          </div>
          <div className="suggestion-form-radio-option">
            <input
              type="radio"
              id="other"
              name="suggestion_type"
              value="other"
              onClick={ this.update('suggestion_type')} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  submitButtons() {
    if (this.state.fullForm) {
      return(
        <button>Submit</button>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          { this.loginButton() }
          <form onSubmit={ this.handleSubmit } className="suggestion-form">
            { this.typeButtons() }
            <textarea
              value={ this.state.body }
              placeholder="Suggest an improvement"
              onFocus={ this.showFullForm }
              onChange={ this.update('body')} />
            { this.submitButtons() }
          </form>
        </div>
      );
    } else {
      return <button>Sign In to Make a Suggestion</button>;
    }
  }
}

export default SuggestionForm;
