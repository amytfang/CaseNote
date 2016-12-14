import * as APIUtil from '../util/annotation_api_util';
import { clearErrors, requestToServer } from './general_actions';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATION_ERRORS = "RECEIVE_ANNOTATION_ERRORS";
export const REMOVE_ANNOTATION = "REMOVE_ANNOTATION";

export const receiveAnnotation = (annotation) => ({
  type: RECEIVE_ANNOTATION,
  annotation
});

export const receiveAnnotationErrors = (errors) => ({
  type: RECEIVE_ANNOTATION_ERRORS,
  errors
});

export const removeAnnotation = (id) => ({
  type: REMOVE_ANNOTATION,
  id
});

export function fetchAnnotation(id) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.fetchAnnotation(id).then(
      (annotation) => dispatch(receiveAnnotation(annotation)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function createAnnotation(annotation) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.createAnnotation(annotation).then(
      (anno) => dispatch(receiveAnnotation(anno)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function editAnnotation(annotation) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.editAnnotation(annotation).then(
      (anno) => dispatch(receiveAnnotation(anno)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}

export function deleteAnnotation(id) {
  return (dispatch) => {
    dispatch(requestToServer());
    return APIUtil.deleteAnnotation(id).then(
      (annotation) => dispatch(removeAnnotation(annotation)),
      (errors) => dispatch(receiveAnnotationErrors(errors))
    );
  };
}
