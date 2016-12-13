import { connect } from 'react-redux';
import { createSuggestion } from '../../actions/suggestion_actions';
import SuggestionForm from './suggestion_form';

const mapStateToProps = (state, ownProps) => ({
  annotationId: ownProps.annotationId,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createSuggestion: (suggestion) => dispatch(createSuggestion(suggestion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionForm);
