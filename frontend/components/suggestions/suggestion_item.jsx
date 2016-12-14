import React from 'react';
import { timeSince } from '../../util/date';

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
    const suggestion = Object.assign({}, this.props.suggestion, { body: this.state.body });
    this.props.editSuggestion(suggestion);
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

    if (this.state.editMode) {
      return(
        <li className="suggestion-item">
          <div>
            <header className="suggestion-header group">
              <div className="suggestion-header-left">
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
                value={ suggestion.body }
                onChange={ this.update('body') }/>
              <button>Submit</button> <button onClick={ this.hideEdit }>Cancel</button>
            </form>

          </div>
        </li>
      );
    } else {
      return(
        <li className="suggestion-item">
          <div>
            <header className="suggestion-header group">
              <div className="suggestion-header-left">
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
          { this.links() }
        </li>
      );
    }
  }
}

export default SuggestionItem;
