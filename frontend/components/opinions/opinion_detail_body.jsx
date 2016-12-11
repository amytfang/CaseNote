import React from 'react';
import OpinionDetailPanel from './opinion_detail_panel';
import AnnotationFormContainer from '../annotations/annotation_form_container';
import Quill from 'quill';
import { withRouter } from 'react-router';

class OpinionDetailBody extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showAnnoPanel: false,
      selectionRange: null,
      selectionLocation: null
     };

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    $(".hidden-edit-button").hide();
    this.quill = new Quill('#edit-editor');
    this.quill.setContents(JSON.parse(this.props.opinion.body));
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
  }

  showEditForm() {
    $(".opinion-detail-main-body").addClass("edit-mode");
    $(".hidden-edit-button").show();
    $(".unhidden-button").hide();
    this.quill.enable(true);
    this.quill.off("selection-change");
  }

  hideEditForm() {
    $(".opinion-detail-main-body").removeClass("edit-mode");
    $(".hidden-edit-button").hide();
    $(".unhidden-button").show();
    this.quill.setContents(JSON.parse(this.props.opinion.body));
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
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

  handleSelection(range, oldRange, source) {
    if (range && range.length !== 0) {
      const location = this.quill.getBounds(range.index, range.length);
      this.setState({
        selectionRange: range,
        selectionLocation: location,
        showAnnoPanel: true
      });
    }
    // else {
    //   this.setState({
    //     selectionRange: null,
    //     selectionLocation: null,
    //     showAnnoPanel: false
    //   });
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

    const rightPanel = this.state.showAnnoPanel ?
      <AnnotationFormContainer
        range={ this.state.selectionRange }
        location={ this.state.selectionLocation }
        opinionId={ opinion.id }
        /> :
      <OpinionDetailPanel opinion={ opinion } />;

    return(
      <main className="opinion-detail-main">
        <section>
          <div id="edit-editor" className="opinion-detail-main-body">
          </div>
          { loggedInButtons }
        </section>
        <aside className="opinion-detail-main-panel">
          { rightPanel }
        </aside>
      </main>
    );
  }
}

export default withRouter(OpinionDetailBody);
