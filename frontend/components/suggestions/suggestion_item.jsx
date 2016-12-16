import React from 'react';
import { timeSince } from '../../util/date';
import VoteContainer from '../votes/vote_container';
import Thumb from '../header/thumb';

const SUGGESTION_TYPES = {
  missing: "missing something",
  restate: "restating the content",
  stretch: "a stretch",
  other: "other"
};

class SuggestionItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = { editMode: false, body: this.props.suggestion.body };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const suggestionId = this.props.suggestion.id;
    this.props.deleteSuggestion(suggestionId);
  }

  handleEdit(e) {
    e.preventDefault();
    const suggestion = { id: this.props.suggestion.id , body: this.state.body};
    this.props.editSuggestion(suggestion).then(this.hideEdit);
  }

  hideEdit() {
    this.setState({editMode: false});
  }

  showEdit() {
    this.setState({editMode: true});
  }

  links() {
    const { currentUser, suggestion } = this.props;

    if (currentUser === null || currentUser.id !== suggestion.user.id) {
      return null;
    } else {
      return <div className="suggestion-user-links">
        <span onClick={ this.showEdit }>Edit</span>
        <span onClick={ this.handleDelete }>Delete</span>
      </div>;
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }


  render() {
    const { suggestion } = this.props;

    //TODO: refactor
    if (this.state.editMode) {
      return(
        <li className="suggestion-item">
          <div>
            <header className="suggestion-header group">
              <div className="suggestion-header-left">
                <Thumb imageURL={ suggestion.user.image } currentUser={false} />
                <h4>{ suggestion.user.username }</h4>
                <h5>
                  Marked as <span>{
                    SUGGESTION_TYPES[suggestion.suggestion_type]
                  }</span>
                </h5>
              </div>
              <span>{ timeSince(suggestion.created_at)} ago</span>
            </header>

            <form onSubmit={ this.handleEdit }>
              <textarea
                value={ this.state.body }
                onChange={ this.update('body') }/>
              <button>Submit</button>
            </form>
            <VoteContainer
              numVotes={ suggestion.numVotes }
              userVote={ suggestion.userVote }
              votableId={ suggestion.id }
              votableType="Suggestion"/>
          </div>
        </li>
      );
    } else {
      return(
        <li className="suggestion-item">
          <div>
            <header className="suggestion-header group">
              <div className="suggestion-header-left">
                <Thumb imageURL={ suggestion.user.image } currentUser={false} />
                <h4>{ suggestion.user.username }</h4>
                <h5>
                  Marked as <span>{
                    SUGGESTION_TYPES[suggestion.suggestion_type]
                  }</span>
                </h5>
              </div>
              <span>{ timeSince(suggestion.created_at)} ago</span>
            </header>

            <p>{ suggestion.body }</p>
          </div>
          <VoteContainer
            numVotes={ suggestion.numVotes }
            userVote={ suggestion.userVote }
            votableId={ suggestion.id }
            votableType="Suggestion"/>
          { this.links() }
        </li>
      );
    }
  }
}

export default SuggestionItem;
