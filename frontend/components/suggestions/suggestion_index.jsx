import React from 'react';
import SuggestionItemContainer from './suggestion_item_container';
import { suggestionsToArray } from '../../util/selectors';

const SuggestionIndex = (props) => {
  if (!props.suggestions) return null;
  const suggestions = suggestionsToArray(props.suggestions);
  return (
    <ul className="suggestion-index">
      { suggestions.map(suggestion => <SuggestionItemContainer
          key={ suggestion.id }
          suggestion={ suggestion } />) }
    </ul>
  );
};

export default SuggestionIndex;
