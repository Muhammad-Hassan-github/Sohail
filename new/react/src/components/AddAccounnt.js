import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addAccount, updateAccount, deleteAccount, getAllAccounts, updatePerson } from '../actions/menus-actions'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';



export default function Contact() {
  const history = useHistory();
  const counter = useSelector(state => {
    return state.accountsDetails[0]
  });
  const dispatch = useDispatch();

  const currencies = [
    {
      value: 'Not Selected',
      label: 'Account Type',
    },
    {
      value: 'current',
      label: 'Current',
    },
    {
      value: 'saving',
      label: 'Saving',
    },
  ]
  const [currency, setCurrency] = React.useState({ name: "", type: "", amount: "", discription: "Initial Deposit", time: new Date().toString().slice(4, 21) });

  const ChangeName = event => {
    setCurrency({ ...currency, name: event.target.value });

  };
  const ChangeType = event => {
    setCurrency({ ...currency, type: event.target.value });

  };
  const ChangeAmount = event => {
    setCurrency({ ...currency, amount: event.target.value });
  };
  const saveAccount = () => {
    if (currency.name == "") {
      swal("Warning!", "Please Enter Account Name");
    }
    else if (currency.type == "") {
      swal("Warning!", "Please Select Account Type");
    }
    else if (currency.amount == "") {
      swal("Warning!", "Please Enter Initial Deposit Amount");
    }
    else {
      swal("Success!", "Account Seccessfully Created", "success");
      dispatch(addAccount(currency))
    
      
      setTimeout(()=>{ history.push("/accounts")},2000)
    }

  };
  return (
    <div className="form" >
      <div className="formHeader">
        <h2>Enter Account Details Blow</h2>
      </div>
      <div className="formContent">
        <TextField
          id="outlined-textarea"
          label="Full Name"
          placeholder="Enter Full Name"
          multiline
          variant="outlined"
          fullWidth
          onChange={ChangeName}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          fullWidth
          label="Select Type"
          value={currency.type}
          onChange={ChangeType}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          type="number"
          id="outlined-textarea"
          label="Initially Deposit in Rs"
          placeholder="Enter Initially Deposit in Rs"
          variant="outlined"
          fullWidth
          onChange={ChangeAmount}
        />
        <div className="formButton">
          <Button variant="contained" color="primary"
            onClick={saveAccount} >
            Save Account
          </Button>
          <Link to="/accounts"><Button variant="contained" color="primary">
            View All
          </Button></Link>
        </div>
      </div>
    </div>
  )
}


