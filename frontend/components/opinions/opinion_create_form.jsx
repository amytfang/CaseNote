import React from 'react';
import Quill from 'quill';

class OpinionCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: "",
      citation: "",
      court: 1,
      date: "",
      judge_id: 1,
      body: "",
      img_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const quill = new Quill('#editor');
    quill.on('text-change', () => {
      let text = quill.getText();
      this.setState({ body: text });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const opinion = Object.assign({}, this.state);
    if (opinion.img_url === "") delete opinion.img_url;
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
                <input
                  type="text"
                  value={ this.state.court }
                  placeholder="Court"
                  onChange={ this.update('court') }/>
              </label>

              <label>Judge *
                <input
                  type="text"
                  placeholder="Judge"
                   />
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
                  value={ this.state.img_url }
                  placeholder="Image URL"
                  onChange={ this.update('img_url') }/>
              </label>

              <label className="opinion-create-form-editor">Body
                <div id="editor">
                  <p>Enter Opinion text </p>
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
