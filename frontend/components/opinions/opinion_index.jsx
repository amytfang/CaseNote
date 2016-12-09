import React from 'react';
import { OpinionIndexItem } from './opinion_index_item';

class OpinionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllOpinions();
  }

  render() {
    if (this.props.opinions.length === 0) return null;
    return (
      <section className="opinions-index">
        <h3>Opinions</h3>
        <ul>
          { this.props.opinions.map((op, idx) =>
            <OpinionIndexItem key={op.id} opinion={op} index={idx}/>
          )}
        </ul>
      </section>
    );
  }
}

export default OpinionIndex;
