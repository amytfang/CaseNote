import React from 'react';
import OpinionDetailHeader from './opinion_detail_header';
import OpinionDetailBodyContainer from './opinion_detail_body_container';
import OpinionDetailPanel from './opinion_detail_panel';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';

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
          <section className="opinion-comment-section">
            <CommentFormContainer opinionId={this.props.params.opinionId} />
            <CommentIndexContainer comments={this.props.opinion.comments} />
          </section>
        </main>
      );
    }
  }

}

export default OpinionDetail;
