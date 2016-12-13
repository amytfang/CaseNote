import { connect } from 'react-redux';
import { fetchAllOpinions } from '../../actions/opinion_actions';
import OpinionIndex from './opinion_index';
import { toArray } from '../../util/selectors';

const mapStateToProps = (state) => ({
  opinions: toArray(state.opinions),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllOpinions: () => dispatch(fetchAllOpinions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpinionIndex);
