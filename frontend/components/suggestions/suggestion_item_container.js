import { connect } from 'react-redux';
import { editSuggestion, deleteSuggestion } from '../../actions/suggestion_actions';
import SuggestionItem from './suggestion_item';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser,
    suggestion: ownProps.suggestion
});


const mapDispatchToProps = (dispatch) => ({
  editSuggestion: (suggestion) => dispatch(editSuggestion(suggestion)),
  deleteSuggestion: (id) => dispatch(deleteSuggestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionItem);
