import React, {Component} from 'react';

class EditCashbookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.cashbook.id,
      title: this.props.cashbook.title,
      opening_value: this.props.cashbook.opening_value
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit(e) {
    e.preventDefault();
    const {id, title, opening_value} = this.state;
    this.props.editCashbook(id, title, opening_value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input name="title"
                 type="text"
                 placeholder="Title..."
                 value={this.state.title}
                 onChange={this.handleChange}/>
        </p>
        <p>
          <input name="opening_value"
                 type="text"
                 placeholder="Opening..."
                 value={this.state.opening_value}
                 onChange={this.handleChange}/>
        </p>
        <button>Update Cashbook</button>
        <hr/>
      </form>
    )
  }
}

export default EditCashbookForm;
