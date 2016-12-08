import React from 'react';
import { Link } from 'react-router';

export const OpinionIndexItem = ({opinion}) => {
  return(
    <li className="opinion-index-item">
      <Link to={`/opinions/${opinion.id}`}>
        {opinion.case},
        {opinion.citation},
        {opinion.court},
        {opinion.date}
      </Link>
    </li>
  );
};
