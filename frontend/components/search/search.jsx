import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value }, () => {
      this.props.searchOpinions( this.state.query );
    });
  }

  resultList() {
    if (!this.props.searchResults || this.props.searchResults.length === 0) {
      return null;
    } else {
      return (
        <ul className="search-result-list">
          { this.props.searchResults.map((opinion) =>
            <li key={opinion.id}>
              <Link to={`/opinions/${opinion.id}`}>
                <span>{ opinion.case }, Written by Judge { opinion.name }</span>
              </Link>
            </li>) }
        </ul>
      );
    }
  }


  render() {
    return (
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="Start Typing to Get Started"
            value={ this.state.query }
            onChange={ this.handleChange }
            className="search-input"/>
        </form>
        { this.resultList() }
      </div>
    );
  }
}

export default Search;
