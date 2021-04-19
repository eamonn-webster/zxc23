import React, {Component} from 'react';
import './App.css';
import CashbooksContainer from './components/CashbooksContainer';
import Header from './components/Login/Header.js';
import axios from 'axios';

// https://github.com/weteamsteve/squadsnap2

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    let that = this
    axios.get('/users/check_for_user', {})
      .then(function (response) {
        if (response.data.email) {
          that.setState({
            currentUser: response.data.email
          })
        }
        else {
          that.setState({
            currentUser: null
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  renderNot() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">zxc23!</h1>
        </header>
        <CashbooksContainer/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header updateCurrentUser={this.updateCurrentUser}/>
      </div>
    )
  }
}

export default App;
