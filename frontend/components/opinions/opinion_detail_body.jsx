import React from 'react';
import OpinionDetailPanel from './opinion_detail_panel';
import AnnotationFormContainer from
  '../annotations/annotation_form_container';
import AnnotationDetailContainer from
  '../annotations/annotation_detail_container';
import Quill from 'quill';
import Delta from 'quill-delta';
import { withRouter } from 'react-router';
import Annotation from '../../util/annotation_format';

class OpinionDetailBody extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      panelView: "opinion",
      selectionRange: null,
      selectionLocation: null,
      selectedAnnotationId: null
     };

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.displayAnnotation = this.displayAnnotation.bind(this);
  }

  componentDidMount() {
    Quill.register(Annotation);
    $(".hidden-edit-button").hide();
    this.quill = new Quill('#edit-editor');
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    $(".opinion-annotation").on("click", this.displayAnnotation );
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
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
  }

  annotationsUnchanged(updatedContents) {
    const changedAnnotations = updatedContents
      .filter((op) => op.attributes.annotation_id )
      .map((op) => ({id: op.annotation_id, length: op.insert.length}));

    const orginalAnnotations = this.props.opinion.annotations;
    for (let i = 0; i < orginalAnnotations.length; i++) {
      if (orginalAnnotations[i].length !== changedAnnotations[i].length)
        return false;
    }
    return true;
  }

  updateAnnotation(updatedContents) {

  }

  handleSubmit(e) {
    e.preventDefault();
    let updatedContents = this.quill.getContents();
    // if (this.annotationsUnchanged(updatedContents)) {
    //   updatedContents = this.updateAnnotations();
    // } else {
    //   //TODO: add error handling
    //   this.hideEditForm();
    //   return;
    // }
    const body = JSON.stringify(updatedContents);
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
        panelView: "annoForm"
      });
    } else if (range && range.length === 0) {
      const location = this.quill.getBounds(range.index, range.length);
      this.setState({
        selectionLocation: location,
      });
    }
  }

  processAnnotations() {
    const { body, annotations } = this.props.opinion;
    let bodyDelta = new Delta(JSON.parse(body));
    let annoDelta = new Delta();

    let index = 0;

    annotations.forEach((anno) => {
      annoDelta.retain(anno.start_idx - index);
      annoDelta.retain(anno.length, { annotation_id: `${anno.id}` });
      index = anno.start_idx + anno.length;
    });
    return bodyDelta.compose(annoDelta);
  }

  displayAnnotation(e) {
    e.preventDefault();
    this.setState({
      selectedAnnotationId: parseInt(e.target.id),
      panelView: "annoDetail"
    });
  }

  render() {
    const { currentUser, opinion, formErrors } = this.props;

    //TODO: refactor button logic
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

    let rightPanel;
    if (this.state.panelView === "opinion") {
      rightPanel = (<OpinionDetailPanel opinion={ opinion } />);
    } else if (this.state.panelView === "annoForm") {
      rightPanel = (<AnnotationFormContainer
        range={ this.state.selectionRange }
        location={ this.state.selectionLocation }
        opinionId={ opinion.id } />);
    } else if (this.state.panelView === "annoDetail") {
      rightPanel = (<AnnotationDetailContainer
        location={ this.state.selectionLocation }
        opinionId={ opinion.id }
        annotationId={ this.state.selectedAnnotationId } />);
    }

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
