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
  }

  componentDidMount() {
    const component = this;

    const options = {
      placeholder: 'Opinion Body',
    };

    const quill = new Quill('#editor', options);
    quill.on('text-change', () => {
      let text = JSON.stringify(quill.getContents());
      this.setState({ body: text });
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
              </label>

              <label>Citation *
                <input
                  type="text"
                  value={ this.state.citation }
                  placeholder="Citation"
                  onChange={ this.update('citation') }/>
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
              </label>

              <label>Date *
                <input
                  type="date"
                  value={ this.state.date }
                  onChange={ this.update('date') }/>
              </label>

              <label>Image URL
                <input
                  type="text"
                  value={ this.state.image }
                  placeholder="Image URL"
                  onChange={ this.update('image') }/>
              </label>

              <label className="opinion-create-form-editor">Body *
                <div id="editor">
                </div>
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

// <label className="opinion-create-form-textarea">Body *
//   <textarea
//     value={ this.state.body }
//     placeholder="Text Body"
//     onChange={ this.update('body')} />
// </label>

export default OpinionCreateForm;
