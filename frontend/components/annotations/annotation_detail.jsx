import React from 'react';
import Quill from 'quill';

class AnnotationDetail extends React.Component {
  componentDidMount() {
    this.quill = new Quill('#anno-editor');
    this.quill.enable(false);
    this.props.fetchAnnotation(this.props.params.annotationId).then(
      (anno) => { this.quill.setContents(JSON.parse(anno.body));}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.annotationId !== nextProps.params.annotationId)
      this.props.fetchAnnotation(nextProps.params.annotationId);
  }

  render() {
    return (
      <section>
        <div id="anno-editor">
        </div>
      </section>
    );
  }

}

export default AnnotationDetail;
