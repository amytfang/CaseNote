import {
  searchOpinions,
  clearSearchResults
} from '../../actions/search_actions';
import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  searchOpinions: (query) => dispatch(searchOpinions(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
