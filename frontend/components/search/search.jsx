import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.currentTarget.value === "") {
      this.setState({ query: e.currentTarget.value }, () => {
        this.props.clearSearchResults();
      });
    } else {
      this.setState({ query: e.currentTarget.value }, () => {
        this.props.searchOpinions( this.state.query );
      });
    }
  }

  resultList() {
    if (this.props.searchResults.length === 0 && this.state.query.length > 2) {
      return (
        <ul className="search-result-list">
          <li key="-1"><span className="no-results">No Results Found</span></li>
        </ul>
      );
    } else if (!this.props.searchResults || this.props.searchResults.length === 0) {
      return null;
    } else {
      return (
        <ul className="search-result-list">
          { this.props.searchResults.map((opinion) =>
            <li key={opinion.id}>
              <Link to={`/opinions/${opinion.id}`}>
                <span className="search-result-case">{ opinion.case }, </span>
                <span>{ opinion.citation }, </span>
                <span className="search-result-name">{ opinion.name }</span>
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
            placeholder="Search by case name, citation, or judge"
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
