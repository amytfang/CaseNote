import { connect } from 'react-redux';
import {
  fetchSingleOpinion,
  clearOpinion
} from '../../actions/opinion_actions';
import OpinionDetail from './opinion_detail';

const mapStateToProps = (state) => ({
  opinion: state.opinionDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleOpinion: (id) => dispatch(fetchSingleOpinion(id)),
  clearOpinion: () => dispatch(clearOpinion())
});

export default connect(mapStateToProps, mapDispatchToProps)(OpinionDetail);
