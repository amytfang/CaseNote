import React from 'react';
import OpinionDetailHeader from './opinion_detail_header';
import OpinionDetailBodyContainer from './opinion_detail_body_container';
import OpinionDetailPanel from './opinion_detail_panel';

class OpinionDetail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleOpinion(this.props.params.opinionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.opinionId !== nextProps.params.opinionId)
      this.props.fetchSingleOpinion(nextProps.params.opinionId);
  }

  render() {
    const { opinion } = this.props;
    if (Object.getOwnPropertyNames(this.props.opinion).length === 0) {
      return null;
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
