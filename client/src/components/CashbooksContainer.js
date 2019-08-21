import React, {Component} from 'react';
import axios from 'axios';
import Cashbook from './Cashbook';
import NewCashbookForm from './NewCashbookForm';
import EditCashbookForm from './EditCashbookForm';

class CashbooksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cashbooks: []
    };
    this.addNewCashbook = this.addNewCashbook.bind(this);
    this.removeCashbook = this.removeCashbook.bind(this);
    this.editingCashbook = this.editingCashbook.bind(this);
    this.editCashbook = this.editCashbook.bind(this);
  }

  componentDidMount() {
    axios.get('/cashbooks')
      .then(response => {
        console.log(response);
        this.setState({
          cashbooks: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='Cashbooks-container'>
        {this.state.cashbooks.map(cashbook => {
          if (this.state.editingCashbookId === cashbook.id) {
            return (<EditCashbookForm
              cashbook={cashbook}
              key={cashbook.id}
              editCashbook={this.editCashbook}
            />)
          }
          else {
            return (<Cashbook cashbook={cashbook} key={cashbook.id} onRemoveCashbook={this.removeCashbook} editingCashbook={this.editingCashbook}/>)
          }
        })}
        <NewCashbookForm onNewCashbook={this.addNewCashbook}/>
      </div>
    )
  }

  addNewCashbook(title, opening_value) {
    axios.post('/cashbooks', {cashbook: {title, opening_value}})
      .then(response => {
        console.log(response);
        const cashbooks = [...this.state.cashbooks, response.data];
        this.setState({cashbooks})
      })
      .catch(error => {
        console.log(error)
      })
  }

  removeCashbook(id) {
    axios.delete('/cashbooks/' + id)
      .then(response => {
        const cashbooks = this.state.cashbooks.filter(
          cashbook => cashbook.id !== id
        );
        this.setState({cashbooks})
      })
      .catch(error => console.log(error))
  }


  editingCashbook(id) {
    this.setState({
      editingCashbookId: id
    })
  }

  editCashbook(id, title, opening_value) {
    axios.put('/cashbooks/' + id, {
      cashbook: {
        title,
        opening_value
      }
    })
      .then(response => {
        console.log(response);
        const cashbooks = this.state.cashbooks;
        const index = cashbooks.findIndex(x => x.id === id);
        cashbooks[index] = {id, title, opening_value};
        this.setState(() => ({
          cashbooks,
          editingCashbookId: null
        }))
      })
      .catch(error => console.log(error));
  }
}

export default CashbooksContainer;
