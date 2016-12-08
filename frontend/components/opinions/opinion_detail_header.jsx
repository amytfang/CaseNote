import React from 'react';

const OpinionDetailHeader = (props) => {
  const { opinion } = props;
  return(
    <div className="opinion-detail-header">
      <section className="opinion-detail-header-info">
        <h2>{opinion.case}</h2>
        <h3>{opinion.citation}</h3>
        <h4>{opinion.court}</h4>
        <h4>{opinion.date}</h4>
        <h4>Written By {opinion.judge}</h4>
      </section>
    </div>
  );
};

export default OpinionDetailHeader;
