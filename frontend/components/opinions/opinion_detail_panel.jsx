import React from 'react';

//will refactor connected container once annotations are implemented

const OpinionDetailPanel = (props) => (
  <div className="opinion-detail-main-panel-img">
    <img src={ props.opinion.image_url } />
  </div>
);

export default OpinionDetailPanel;
