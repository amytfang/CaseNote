import React from 'react';
import OpinionDetailPanel from './opinion_detail_panel';

const OpinionDetailBody = (props) => {
  return (
    <main className="opinion-detail-main">
      <div className="opinion-detail-main-body">
        <p>{ props.opinion.body }</p>
      </div>
      <OpinionDetailPanel opinion={ props.opinion } />
    </main>
  );
};

export default OpinionDetailBody;
