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
      clickPanel: false,
      editorClass: "",
     };

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.displayAnnotation = this.displayAnnotation.bind(this);
    this.setState = this.setState.bind(this);
    this.setPanel = this.setPanel.bind(this);
    this.buttons = this.buttons.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearPriorRange = this.clearPriorRange.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#edit-editor');
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    const annotations = document.getElementsByClassName("opinion-annotation");
    Array.from(annotations).forEach(el => {
      el.addEventListener("click", this.displayAnnotation);
    });
    window.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick(e) {
    if (!this.state.clickPanel) this.setPanel("opinion");
    this.clearPriorRange();
  }

  setPanel(type) {
    this.setState({ panelView: type });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.opinion.body !== nextProps.opinion.body ||
      !isEqual(this.props.opinion.annotations, nextProps.opinion.annotations)) {
      this.quill.setContents(this.processAnnotations(nextProps.opinion));
      const annotations = document.getElementsByClassName("opinion-annotation");
      Array.from(annotations).forEach(el => {
        el.addEventListener("click", this.displayAnnotation);
      });
    }
  }

  showEditForm() {
    this.setState({ editorClass: "edit-mode" });
    this.quill.enable(true);
    this.quill.off("selection-change");
  }

  hideEditForm() {
    this.setState({ editorClass: "" });
    this.quill.setContents(this.processAnnotations());
    this.quill.enable(false);
    this.quill.on("selection-change", this.handleSelection );
    const annotations = document.getElementsByClassName("opinion-annotation");
    Array.from(annotations).forEach(el => {
      el.addEventListener("click", this.displayAnnotation);
    });
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
    if (!this.props.opinion.annotations) return true;
    const originalAnnotations = toArray(this.props.opinion.annotations)
      .sort((a, b) => {
        if (a.start_idx < b.start_idx) {
          return -1;
        } else if (a.start_idx > b.start_idx) {
          return 1;
        } else {
          return 0;
      }});
    if (updatedAnnotations.length !== originalAnnotations.length) return false;
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
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
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
      this.hideEditForm();
      return;
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteOpinion(this.props.opinion.id).then(
      () => this.props.router.push("/index")
    );
  }

  handleSelection(range, oldRange, source) {
    if (!range ||
      this.isValid(this.quill.getContents(range.index, range.length))) return;
    if (range.length !== 0) {
      this.quill.formatText(range.index, range.length, "background", "#ffff64");
      const location = this.quill.getBounds(range.index, range.length);
      this.setState({
        selectionRange: range,
        selectionLocation: ((location.top + location.bottom) / 2) - 15,
        panelView: "annoForm"
      });
    }
  }

  clearPriorRange() {
    const selectionRange = this.state.selectionRange;
    if (selectionRange !== null) {
      this.quill.removeFormat(selectionRange.index, selectionRange.length);
      this.setState({ selectionRange: null });
    }
  }

  isValid(delta) {
    let includeAnno = false;
    delta.forEach((el) => {
      if (el["attributes"] && el.attributes["annotation_id"]) {
        includeAnno = true;
      }
    });
    return includeAnno;
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
    e.stopPropagation();
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

    if (this.state.editorClass !== "") {
      return <div> { submitButton } { cancelButton } <span>Note: Edits will <strong>not</strong> save if annotated text is altered</span></div>;
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
        setPanel = { this.setPanel }
        clearPriorRange = { this.clearPriorRange }/>);
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
          <div id="edit-editor" className={ this.state.editorClass }>
          </div>
          { this.buttons() }
          <section className="opinion-comment-section">
            <CommentFormContainer opinionId={this.props.params.opinionId} />
            <CommentIndexContainer comments={this.props.opinion.comments} />
          </section>
        </section>
        <aside
          id="opinion-detail-main-panel"
          className="opinion-detail-main-panel"
          onMouseDown={ e => e.stopPropagation() }>
          { rightPanel }
        </aside>
      </main>
    );
  }
}

export default withRouter(OpinionDetailBody);
