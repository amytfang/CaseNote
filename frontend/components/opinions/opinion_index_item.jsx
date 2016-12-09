import React from 'react';
import { Link } from 'react-router';

export const OpinionIndexItem = ({opinion, index }) => {
  return(
    <li className="opinion-index-item group">
      <Link to={`/opinions/${opinion.id}`}>
        <div>{ index + 1 }</div>
        <img src={ opinion.thumb }/>
        <div className="cite">
          <span className="full-cite">{ opinion.full_citation }</span>
          <span className="court-cite">{ opinion.court }</span>
        </div>
      </Link>
    </li>
  );
};
