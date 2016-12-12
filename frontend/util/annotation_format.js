import Quill from 'quill';

let Inline = Quill.import('blots/inline');

class Annotation extends Inline{
  static create(value) {
    let node = super.create();
    node.setAttribute('id', value);
    node.setAttribute('style','background: #e2e2e2; cursor: pointer');
    node.setAttribute('onMouseOut', "this.style.background='#e2e2e2'");
    node.setAttribute('onMouseOver', "this.style.background='#ffff64'");
    return node;
  }

  static formats(node) {
    return node.getAttribute('id');
  }
}

Annotation.blotName = "annotation_id";
Annotation.className = "opinion-annotation";

export default Annotation;
