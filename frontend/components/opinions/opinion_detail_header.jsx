import React from 'react';

const OpinionDetailHeader = (props) => {
  const { opinion } = props;
  const divStyle = {
    backgroundImage: `url(${opinion.image_url})`
  };
  return(
    <div style={ divStyle } className="opinion-detail-header gradient">
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
