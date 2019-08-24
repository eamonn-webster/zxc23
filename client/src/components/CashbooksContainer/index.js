import React, {Component} from 'react';
import axios from 'axios';
import Cashbook from '../Cashbook';
import NewCashbookForm from '../NewCashbookForm';
import EditCashbookForm from '../EditCashbookForm';
import CashbookService from '../../services/CashbookService'

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
    CashbookService.index().then(response => {
      this.setState({
        cashbooks: response
      })
    })
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
    CashbookService.post(title, opening_value)
      .then(response => {
        // console.log(response);
        const cashbooks = [...this.state.cashbooks, response.data];
        this.setState({cashbooks})
      })
      .catch(error => console.log(error.response.status));
  }

  removeCashbook(id) {
    CashbookService.delete(id)
      .then(response => {
        const cashbooks = this.state.cashbooks.filter(
          cashbook => cashbook.id !== id
        );
        this.setState({cashbooks})
      })
      .catch(error => console.log(error.response.status));
  }


  editingCashbook(id) {
    this.setState({
      editingCashbookId: id
    })
  }

  editCashbook(id, title, opening_value) {
    CashbookService.put(id, title, opening_value)
      .then(response => {
        // console.log(response);
        const cashbooks = this.state.cashbooks;
        const index = cashbooks.findIndex(x => x.id === id);
        cashbooks[index] = {id, title, opening_value};
        this.setState(() => ({
          cashbooks,
          editingCashbookId: null
        }))
      })
      .catch(error => console.log(error.response.status));
  }
}

export default CashbooksContainer;
