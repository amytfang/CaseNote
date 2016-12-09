import React from 'react';

//will refactor connected container once annotations are implemented

const OpinionDetailPanel = (props) => (
  <aside className="opinion-detail-main-panel">
    <div className="opinion-detail-main-panel-img">
      <img src={ props.opinion.image_url } />
    </div>
  </aside>
);

export default OpinionDetailPanel;
