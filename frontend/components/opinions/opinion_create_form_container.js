import { connect } from 'react-redux';
import { createOpinion } from '../../actions/opinion_actions';
import OpinionCreateForm from './opinion_create_form';

const mapStateToProps = (state) => ({
  errors: state.formErrors.opinion
});

const mapDispatchToProps = (dispatch) => ({
  createOpinion: (opinion) => dispatch(createOpinion(opinion))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpinionCreateForm);
