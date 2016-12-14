import React from 'react';
import Quill from 'quill';

class OpinionCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: "",
      citation: "",
      court_id: "",
      date: "",
      judge_id: "",
      body: "",
      image: "",
      courts: [],
      judges: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusCursor = this.focusCursor.bind(this);
  }

  componentDidMount() {
    const component = this;

    this.quill = new Quill('#editor');
    this.quill.on('text-change', () => {
      if (this.quill.getText() !== "\n") {
        let text = JSON.stringify(this.quill.getContents());
        this.setState({ body: text });
      } else {
        this.setState({ body: "" });
      }
    });

    $.ajax({
      type: "GET",
      url: "/api/judges",
      success: (data) => component.setState({ judges: data })
    });

    $.ajax({
      type: "GET",
      url: "/api/courts",
      success: (data) => component.setState({ courts: data })
    });

  }

  focusCursor() {
    this.quill.focus();
  }

  handleSubmit(e) {
    e.preventDefault();


    const opinion = {
      case: this.state.case,
      citation: this.state.citation,
      court_id: this.state.court_id,
      date: this.state.date,
      judge_id: this.state.judge_id,
      body: this.state.body,
      image: this.state.image
    };

    if (opinion.image === "") delete opinion.image;

    this.props.createOpinion(opinion).then(
      (op) => this.props.router.push(`/opinions/${op.opinion.id}`)
    );
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { errors } = this.props;

    const bodyErrors = (errors.body) ?
      <div className="body-error create-form-errors">
        Body { errors.body[0] }
      </div> : null;
    const caseErrors = (errors.case) ?
      <div className="case-error create-form-errors">
        Case { errors.case[0] }
      </div> : null;
    const citationErrors = (errors.citation) ?
      <div className="citation-error create-form-errors">
        Citation { errors.citation[0] }
      </div> : null;
    const courtErrors = (errors.court) ?
      <div className="court-error create-form-errors">
        Court { errors.court[0] }
      </div> : null;
    const dateErrors = (errors.date) ?
      <div className="date-error create-form-errors">
        Date { errors.date[0] }
      </div> : null;
    const judgeErrors = (errors.judge) ?
      <div className="judge-error create-form-errors">
        Judge { errors.judge[0] }
      </div> : null;
    const imageErrors = (errors.image) ?
      <div className="image-error create-form-errors">
        Image { errors.image[0] }
      </div> : null;

    return(
      <div className="opinion-create-page">
        <section className="opinion-create-form">
          <header className="opinion-create-form-header group">
            <h2>Add Opinion</h2>
            <div>* required</div>
          </header>
          <form onSubmit={ this.handleSubmit }>
            <div className="opinion-create-form-fields">
              <label>Case *
                <input
                  type="text"
                  value={ this.state.case }
                  placeholder="Case"
                  onChange={ this.update('case') }/>
                { caseErrors }
              </label>

              <label>Citation *
                <input
                  type="text"
                  value={ this.state.citation }
                  placeholder="Citation"
                  onChange={ this.update('citation') }/>
                { citationErrors }
              </label>

              <label>Court *
                <select
                  className="opinion-create-form-dropdown"
                  value={ this.state.court_id }
                  onChange={ this.update('court_id')}>
                  <option value={ "" } key={ 0 }>
                    Select a Court
                  </option>
                  { this.state.courts.map((court) => (
                    <option value={ court.id } key={ court.id }>
                      { court.name }
                    </option>
                  ))}
                </select>
                { courtErrors }
              </label>

              <label>Judge *
                <select
                  className="opinion-create-form-dropdown"
                  value={ this.state.judge_id }
                  onChange={ this.update('judge_id')}>
                  <option value={ "" } key={ 0 }>
                    Select a Judge
                  </option>
                  { this.state.judges.map((judge) => (
                    <option value={ judge.id } key={ judge.id }>
                      { judge.name }
                    </option>
                  ))}
                </select>
                { judgeErrors }
              </label>

              <label>Date *
                <input
                  type="date"
                  value={ this.state.date }
                  onChange={ this.update('date') }/>
                { dateErrors }
              </label>

              <label>Image URL
                <input
                  type="text"
                  value={ this.state.image }
                  placeholder="Image URL"
                  onChange={ this.update('image') }/>
                { imageErrors }
              </label>

              <label className="opinion-create-form-editor">Body *
                <div id="editor" onClick={ this.focusCursor }>
                </div>
                { bodyErrors }
              </label>

            </div>

            <div className="opinion-create-form-submit">
              <button>Submit</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default OpinionCreateForm;
