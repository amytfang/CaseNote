import React from 'react';

class OpinionCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: "",
      citation: "",
      court: "",
      date: "",
      judge: "",
      img_url: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const opinion = Object.assign({}, this.state);
    this.props.createOpinion(opinion).then(
      (op) => this.props.router.push(`/opinions/${op.id}`)
    );
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return(
      <section className="opinion-create-form">
        <h2>Add Opinion</h2>
        <form onSubmit={ this.handleSubmit }>
          <label>Case
            <input
              type="text"
              value={ this.state.case }
              placeholder="Case"
              onChange={ this.update('case') }/>
          </label>

          <label>Citation
            <input
              type="text"
              value={ this.state.citation }
              placeholder="Citation"
              onChange={ this.update('citation') }/>
          </label>

          <label>Court
            <input
              type="text"
              value={ this.state.court }
              placeholder="Court"
              onChange={ this.update('court') }/>
          </label>

          <label>Judge
            <input
              type="text"
              value={ this.state.judge }
              placeholder="Judge"
              onChange={ this.update('judge') }/>
          </label>

          <label>Date
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

          <label>Body
            <textarea
              value={ this.state.body }
              placeholder="Text Body"
              onChange={ this.update('body')} />
          </label>

          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default OpinionCreateForm;
