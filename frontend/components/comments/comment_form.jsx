import React from 'react';
import ModalWrapper from '../session_form/modal_wrapper';
import Thumb from '../header/thumb';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formClass: "",
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
      this.setState({ formClass: "", body: ""});
    });

  }

  showFullForm(e) {
    e.preventDefault();
    this.setState({ formClass: "full-mode" });
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

    const button = this.state.formClass === "" ? null : <button>Submit</button>;
    if (!this.props.currentUser) {
      return (
      <div className="group">
        <button onClick={ this.handleLogIn }>Sign In to Leave a Comment</button>
        <ModalWrapper
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalOff }
          formType="signin" />
      </div>);
    } else {
      const formClasses = `comment-form group ${this.state.formClass}`;

      return(
        <form onSubmit={ this.handleSubmit } className={ formClasses }>
          <div>
            <Thumb imageURL={ this.props.currentUser.thumb } currentUser="true" />
            <textarea
              value={ this.state.body }
              placeholder="Add a Comment"
              onFocus={ this.showFullForm }
              onChange={ this.update }></textarea>
          </div>
          { button }
        </form>
      );
    }
  }
}

export default CommentForm;
