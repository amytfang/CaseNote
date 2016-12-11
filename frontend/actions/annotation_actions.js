import * as APIUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATION_ERRORS = "RECEIVE_ANNOTATION_ERRORS";

export const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotationErrors = (errors) => ({
  type: RECEIVE_ANNOTATION_ERRORS,
  errors
});

export function fetchAnnotation(id) {
  return (dispatch) => {
    return APIUtil.fetchAnnotation(id).then(
      (annotation) => dispatch(receiveAnnotation(annotation)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function createAnnotation(annotation) {
  return (dispatch) => {
    return APIUtil.createAnnotation(annotation).then(
      (anno) => dispatch(receiveAnnotation(anno)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function editAnnotation(annotation) {
  return (dispatch) => {
    return APIUtil.editAnnotation(annotation).then(
      (anno) => dispatch(receiveAnnotation(anno)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function deleteAnnotation(id) {
  return (dispatch) => {
    return APIUtil.deleteAnnotation(id).then(
      () => dispatch(receiveAnnotation({})),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}
