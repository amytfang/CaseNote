import React from 'react';
import OpinionDetailHeader from './opinion_detail_header';
import OpinionDetailBody from './opinion_detail_body';

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
          <OpinionDetailBody text={ this.props.opinion.body } />
        </main>
      );
    }
  }

}

export default OpinionDetail;
