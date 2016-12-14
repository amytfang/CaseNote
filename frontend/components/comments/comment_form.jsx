import React from 'react';
import ModalWrapper from '../session_form/modal_wrapper';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullForm: false,
      body: "",
      modalOn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showFullForm = this.showFullForm.bind(this);
    this.update = this.update.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.modalOff = this.modalOff.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      opinion_id: this.props.opinionId
    };

    this.props.createComment(comment).then(() => {
      this.setState({ fullForm: false, body: ""});
    });
  }

  showFullForm(e) {
    e.preventDefault();
    this.setState({ fullForm: true });
    $(".comment-form").addClass("full-mode");
  }

  modalOff() {
    this.setState({ modalOn: false });
  }

  handleLogIn(e) {
    e.preventDefault();
    this.setState({ modalOn: true });
  }


  update(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const button = this.state.fullForm ? <button>Submit</button> : null;
    if (!this.props.loggedIn) {
      return (
      <div>
        <button onClick={ this.handleLogIn }>Sign In to Leave a Comment</button>;
        <ModalWrapper
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalOff }
          formType="signin" />
      </div>);
    } else {
      return(
        <form onSubmit={ this.handleSubmit } className="comment-form">
          <textarea
            value={ this.state.body }
            placeholder="Add a Comment"
            onFocus={ this.showFullForm }
            onChange={ this.update }></textarea>
          { button }
        </form>
      );
    }
  }
}

export default CommentForm;
