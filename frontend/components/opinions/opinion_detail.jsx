import React from 'react';

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

          <h2>{ opinion.case }</h2>
          <h3>{ opinion.citation }</h3>
          <h4>{ opinion.court }</h4>
          <h4>{ opinion.date }</h4>
          <h4>{ opinion.judge }</h4>

          <p>{ opinion.body }</p>
        </main>
      );
    }
  }

}

export default OpinionDetail;
