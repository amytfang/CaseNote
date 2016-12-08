import React from 'react';

const OpinionDetailBody = (props) => {
  return (
    <main className="opinion-detail-main">
      <div className="opinion-detail-main-body">
        <p>{ props.opinion.body }</p>
      </div>
    </main>
  );
};

export default OpinionDetailBody;
