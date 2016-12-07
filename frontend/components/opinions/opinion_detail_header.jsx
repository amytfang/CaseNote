import React from 'react';

const OpinionDetailHeader = (props) => {
  const { opinion } = props;
  return(
    <div className="opinion-detail-header">
      <h2>{opinion.case}</h2>
      <h3>{opinion.citation}</h3>
      <h4>{opinion.court}</h4>
      <h4>{opinion.judge}</h4>
      <h4>{opinion.date}</h4>
      <h4>{opinion.transcriber}</h4>
    </div>
  );
};

export default OpinionDetailHeader;
