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
        <ul>
          { this.props.opinions.map((op) =>
            <OpinionIndexItem key={op.id} opinion={op} />
          )}
        </ul>
      </section>
    );
  }
}

export default OpinionIndex;
