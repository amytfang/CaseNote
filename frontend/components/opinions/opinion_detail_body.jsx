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
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import { toArray } from '../../util/selectors';
import { isEqual } from 'lodash';

Quill.register(Annotation);

class OpinionDetailBody extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      panelView: "opinion",
      selectionRange: null,
      selectionLocation: null,
      selectedAnnotationId: null,
      clickLocation: null,
      editMode: false,
     };

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.displayAnnotation = this.displayAnnotation.bind(this);
    this.resetListener = this.resetListener.bind(this);
    this.setState = this.setState.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.buttons = this.buttons.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#edit-editor');
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    $(".opinion-annotation").on("click", this.displayAnnotation );
    this.resetListener();
  }

  setPanel(type) {
    this.setState({ panelView: type });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.opinion.body !== nextProps.opinion.body ||
      !isEqual(this.props.opinion.annotations, nextProps.opinion.annotations)) {
      this.quill.setContents(this.processAnnotations(nextProps.opinion));
      $(".opinion-annotation").on("click", this.displayAnnotation );
    }
  }

  resetListener() {
    $("body").click((e) =>  {
      if ($(e.target).closest('.ReactModal__Content').length) {
        return;
      } else if (!$(e.target).closest('#opinion-detail-main-panel').length &&
        !$(e.target).hasClass("opinion-annotation")) {
          if (this.state.panelView !== "opinion") {
            this.setState({ panelView: "opinion"});
          }
        }
    });
  }

  showEditForm() {
    $(".opinion-detail-main-body").addClass("edit-mode");
    this.setState({ editMode: true });
    this.quill.enable(true);
    this.quill.off("selection-change");
  }

  hideEditForm() {
    $(".opinion-detail-main-body").removeClass("edit-mode");
    this.setState({ editMode: false });
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    $(".opinion-annotation").on("click", this.displayAnnotation );
  }

  parseAnnotations(updatedContents) {
    let index = 0;
    let result = [];
    updatedContents.forEach((op) => {
      if (op.hasOwnProperty("attributes") &&
        op.attributes.hasOwnProperty("annotation_id")) {
        result.push({
          id: parseInt(op.attributes.annotation_id),
          length: op.insert.length,
          start_idx: index
        });
      }
      index += op.insert.length;
    });
    return result;
  }

  annotationsUnchanged(updatedAnnotations) {
    const originalAnnotations = toArray(this.props.opinion.annotations).sort((a, b) => {
      if (a.start_idx < b.start_idx) {
        return -1;
      } else if (a.start_idx > b.start_idx) {
        return 1;
      } else {
        return 0;
      }});
    for (let i = 0; i < originalAnnotations.length; i++) {
      if (originalAnnotations[i].length !== updatedAnnotations[i].length) {
        return false;
      }
    }
    return true;
  }

  updateAnnotations(newAnnotations) {
    newAnnotations.forEach((anno) => {
      this.props.editAnnotation(anno);
      this.quill.formatText(anno.start_idx, anno.length, 'annotation_id', false);
      this.quill.formatText(anno.start_idx, anno.length, 'background', false);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newContents = this.quill.getContents();
    let newAnnotations = this.parseAnnotations(newContents);
    if (this.annotationsUnchanged(newAnnotations)) {
      this.updateAnnotations(newAnnotations);
      const body = JSON.stringify(this.quill.getContents());
      this.props.editOpinion({ body, id: this.props.opinion.id }).then(
        (op) => {
          this.quill.setContents(JSON.parse(op.opinion.body));
          this.hideEditForm();
        });
    } else {
      //TODO: add error handling
      this.hideEditForm();
      return;
    }
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
        selectionLocation: ((location.top + location.bottom) / 2) - 15,
        panelView: "annoForm"
      });
    }
  }

  processAnnotations(opinion = this.props.opinion) {
    const { body, annotations } = opinion;
    let bodyDelta = new Delta(JSON.parse(body));
    if (!annotations) return bodyDelta;
    let annoDelta = new Delta();
    const annoArray = toArray(annotations).sort((a, b) => {
      if (a.start_idx < b.start_idx) {
        return -1;
      } else if (a.start_idx > b.start_idx) {
        return 1;
      } else {
        return 0;
      }
    });

    let index = 0;

    annoArray.forEach((anno) => {
      annoDelta.retain(anno.start_idx - index);
      annoDelta.retain(anno.length, { annotation_id: `${anno.id}` });
      index = anno.start_idx + anno.length;
    });
    return bodyDelta.compose(annoDelta);
  }

  displayAnnotation(e) {
    const locationY = (e.pageY - 400) <= 0 ? 0 : e.pageY - 400;
    this.setState({
      selectedAnnotationId: parseInt(e.target.id),
      panelView: "annoDetail",
      selectionLocation: locationY
    });
  }

  buttons() {
    const { currentUser, opinion } = this.props;
    if (!currentUser) return null;

    const editButton = (
      <button className="unhidden-button" onClick={ this.showEditForm }>
        Edit
      </button>);

    const deleteButton = (currentUser.id === opinion.transcriber_id) ?
      <button onClick={ this.handleDelete }>Delete</button> : null;

    const submitButton = (
      <button className="hidden-edit-button" onClick={ this.handleSubmit }>
        Submit
      </button>);

    const cancelButton = (
      <button className="hidden-edit-button" onClick={ this.hideEditForm }>
        Cancel
      </button>);

    if (this.state.editMode) {
      return <div> { submitButton } { cancelButton } </div>;
    } else {
      return <div> { editButton } { deleteButton } </div>;
    }
  }

  render() {
    const { currentUser, opinion, formErrors } = this.props;

    let rightPanel;
    if (this.state.panelView === "opinion") {
      rightPanel = (<OpinionDetailPanel opinion={ opinion } />);
    } else if (this.state.panelView === "annoForm") {
      rightPanel = (<AnnotationFormContainer
        range={ this.state.selectionRange }
        location={ this.state.selectionLocation }
        opinionId={ opinion.id }
        setPanel = { this.setPanel } />);
    } else if (this.state.panelView === "annoDetail") {
      rightPanel = (<AnnotationDetailContainer
        location={ this.state.selectionLocation }
        opinionId={ opinion.id }
        annotationId={ this.state.selectedAnnotationId }
        setPanel = { this.setPanel } />);
    }

    return(
      <main className="opinion-detail-main">
        <section>
          <div id="edit-editor" className="opinion-detail-main-body">
          </div>
          { this.buttons() }

          <section className="opinion-comment-section">
            <CommentFormContainer opinionId={this.props.params.opinionId} />
            <CommentIndexContainer comments={this.props.opinion.comments} />
          </section>
        </section>
        <aside
          id="opinion-detail-main-panel"
          className="opinion-detail-main-panel">
          { rightPanel }
        </aside>
      </main>
    );
  }
}

export default withRouter(OpinionDetailBody);
