import React from 'react';
import OpinionDetailHeader from './opinion_detail_header';
import OpinionDetailBodyContainer from './opinion_detail_body_container';
import OpinionDetailPanel from './opinion_detail_panel';
import Loader from '../loader';

class OpinionDetail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleOpinion(this.props.params.opinionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.opinionId !== nextProps.params.opinionId)
      this.props.fetchSingleOpinion(nextProps.params.opinionId);
  }

  componentWillUnmount() {
    this.props.clearOpinion();
  }

  render() {
    const { opinion } = this.props;
    if (Object.getOwnPropertyNames(opinion).length === 0) {
      return <Loader/>;
    } else {
      return (
        <main className="opinion-detail">
          <OpinionDetailHeader opinion={ this.props.opinion }/>
          <OpinionDetailBodyContainer />
        </main>
      );
    }
  }

}

export default OpinionDetail;
