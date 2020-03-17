import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Deposit from "./deposit"
import Withdraw from "./withdraw"
import AddAccounnt from "./AddAccounnt"
import TransactionsDetails from "./TransactionsDetails"
import AccountDetails from "./AccountDetails"
import { addAccount, updateAccount, deleteAccount, getAllAccounts, updatePerson } from '../actions/menus-actions'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'

export default function About() {
  const dispatch = useDispatch();
  const accounts = useSelector(state => {
    return state.accountsDetails
  });
  const transactions = useSelector(state => {
    return state.usersReducer
  });
  return (
    <div>
      <div class="flex">
        <Header length={accounts.length}/>
        <Footer length={transactions.length}/>
      </div>
    </div>
  )
}