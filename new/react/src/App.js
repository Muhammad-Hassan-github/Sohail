import React, { Component } from 'react';
import Header from './components/Nav'
import './App.css';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Accounts from './components/Accounts';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import preloader from "./images/preloder.gif"
import AddAccounnt from "./components/AddAccounnt"
import AccountDetails from "./components/AccountDetails"
import TransactionDetails from "./components/TransactionsDetails"
import { connect } from 'react-redux';
import { addAccount, updateAccount, deleteAccount, getAllAccounts, updatePerson } from './actions/menus-actions'

class App extends Component {
  state = {
    loading: true,
  }

  async componentWillMount() {
    console.log("componentWillMount.js")
    await this.props.dispatch(getAllAccounts())
  }
  componentDidMount() {
    console.log("componentDidMount")
    this.setState({ loading: false })
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
    this.state.loading = "ok"
  }
  render() {
console.log("app.js")
    return (

    this.state.loading != "ok" ? <div className="preloader"><img src={preloader}  alt="loading" /></div>:

        <BrowserRouter>
          <div className="App">
            <Header />
            <section>
              <Switch>
                <Route path="/transactions" component={Transactions} />
                <Route path="/user" component={AccountDetails} />
                <Route path="/transaction" component={TransactionDetails} />
                <Route path="/accounts" component={Accounts} />
                <Route path="/addAccount" component={AddAccounnt} />
                <Route exact path="/" component={Home} />
                <Route path="/" component={Home} />
              </Switch>
            </section>
          </div>
          <div style={{textAlign:"center",marginTop:"30px"}}><p> © 2020. All rights reserved. <b><a href="https://github.com/Muhammad-Hassan-github" style={{color:"#3f51b5"}} > #MuhammadHassan </a></b></p></div>
        </BrowserRouter>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    state1: store.accountsDetails,
    state2: store.usersReducer
  }


}
export default connect(mapStateToProps)(App);
