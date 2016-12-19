import React from 'react';
import SearchContainer from './search/search_container';

class Home extends React.Component{

  render () {
    return (
      <div className="landing-page">
        <div className="landing-page-greeting">
          CaseNote is a crowdsourced collection of court opinions and legal knowledge.
        </div>
        <SearchContainer />
      </div>
    );

  }
}

export default Home;
