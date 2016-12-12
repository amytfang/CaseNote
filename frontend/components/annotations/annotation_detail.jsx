import React from 'react';
import Quill from 'quill';
import {withRouter} from 'react-router';

class AnnotationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };

    this.showEditForm = this.showEditForm.bind(this);
    this.hideEditForm = this.hideEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.quill = new Quill('#anno-editor');
    this.props.fetchAnnotation(this.props.annotationId).then(
      (anno) => {
        this.quill.setContents(JSON.parse(anno.annotation.body));
      }
    );
    this.quill.enable(false);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.annotationId !== nextProps.annotationId)
      this.props.fetchAnnotation(nextProps.annotationId).then(
        (anno) => {
          this.quill.setContents(JSON.parse(anno.annotation.body));
        }
      );
  }

  showEditForm(e) {
    e.preventDefault();
    $("#anno-editor").addClass("edit-mode");
    this.quill.enable(true);
    this.setState({ editMode: true });
  }

  hideEditForm(e) {
    if (e) e.preventDefault();
    $("#anno-editor").removeClass("edit-mode");
    this.quill.setContents(JSON.parse(this.props.annotationDetail.body));
    this.quill.enable(false);
    this.setState({ editMode: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = JSON.stringify(this.quill.getContents());
    this.props.editAnnotation({ body, id: this.props.annotationDetail.id })
      .then(
        (op) => {
          this.quill.setContents(JSON.parse(op.annotation.body));
          this.hideEditForm();
        }
      );
  }

  handleDelete(e) {
    e.preventDefault();

    //TODO: figure something out for actions after delete other than reload
    const opinionId = this.props.annotationDetail.opinion_id;
    this.props.deleteAnnotation(this.props.annotationDetail.id)
      .then(
        () => location.reload()
      );
  }

  buttons() {
    if (Object.getOwnPropertyNames(this.props.annotationDetail).length === 0) {
      return null;
    }

    let initialButtons;
    if (this.props.currentUser && this.props.annotationDetail) {
      if (this.props.currentUser.id === this.props.annotationDetail.user.id) {
        initialButtons = (
          <div>
            <button onClick={ this.showEditForm }>Edit</button>
            <button onClick={ this.handleDelete }>Delete</button>
          </div>
        );
      } else {
        initialButtons = (
          <div>
            <button onClick={ this.showEditForm }>Edit</button>
          </div>
        );
      }
    } else { initialButtons = null; }

    let editButtons = (
      <div>
        <button onClick={ this.handleSubmit }>Submit</button>
        <button onClick={ this.hideEditForm }>Cancel</button>
      </div>
    );

    return this.state.editMode ? editButtons : initialButtons;
  }

  contributors() {
    if (Object.getOwnPropertyNames(this.props.annotationDetail).length === 0) {
      return null;
    } else {
      return <span>{ this.props.annotationDetail.user.username }</span>;
    }
  }


  render() {
    const sectionStyle = {
      top: `${ this.props.locationY }px`
    };

    return (
      <section className="annotation-detail-view" style={ sectionStyle }>
        <div className="annotation-detail-view-header">
          Annotation by { this.contributors() }
        </div>
        <div id="anno-editor">
        </div>
        { this.buttons() }
      </section>
    );
  }

}

export default withRouter(AnnotationDetail);
