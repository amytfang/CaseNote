import React from 'react';
import OpinionDetailPanel from './opinion_detail_panel';
import Quill from 'quill';
import { withRouter } from 'react-router';

class OpinionDetailBody extends React.Component{
  constructor(props) {
    super(props);

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    $(".hidden-edit-button").hide();
    this.quill = new Quill('#edit-editor');
    this.quill.setContents(JSON.parse(this.props.opinion.body));
    this.quill.enable(false);
  }

  showEditForm() {
    $(".opinion-detail-main-body").addClass("edit-mode");
    $(".hidden-edit-button").show();
    $(".unhidden-button").hide();
    this.quill.enable(true);
  }

  hideEditForm() {
    $(".opinion-detail-main-body").removeClass("edit-mode");
    $(".hidden-edit-button").hide();
    $(".unhidden-button").show();
    this.quill.setContents(JSON.parse(this.props.opinion.body));
    this.quill.enable(false);
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify(this.quill.getContents());
    this.props.editOpinion({ body, id: this.props.opinion.id }).then(
      (op) => {
        this.quill.setContents(JSON.parse(op.opinion.body));
        this.hideEditForm();
      });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteOpinion(this.props.opinion.id).then(
      () => this.props.router.push("/index")
    );
  }

  render() {
    const { currentUser, opinion, formErrors } = this.props;

    let transcriberButtons, loggedInButtons;

    if (currentUser && currentUser.id === opinion.transcriber_id) {
      transcriberButtons = <button
        className="unhidden-button"
        onClick={ this.handleDelete }>
        Delete
      </button>;
    } else {
      transcriberButtons = null;
    }

    if (currentUser) {
      loggedInButtons = (
        <div>
          <button className="hidden-edit-button" onClick={ this.handleSubmit }>
            Submit
          </button>
          <button className="hidden-edit-button" onClick={ this.hideEditForm }>
            Cancel
          </button>
          <button className="unhidden-button" onClick={ this.showEditForm }>
            Edit
          </button>
          { transcriberButtons }
        </div>
      );
    } else {
      loggedInButtons = null;
    }


    return(
      <main className="opinion-detail-main">
        <section>
          <div id="edit-editor" className="opinion-detail-main-body">
          </div>
          { loggedInButtons }
        </section>
        <OpinionDetailPanel opinion={ this.props.opinion } />
      </main>
    );
  }
}

export default withRouter(OpinionDetailBody);
