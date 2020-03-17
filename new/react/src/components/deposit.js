import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import { addTransaction } from '../actions/menus-actions'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert';




export default function FormDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({account_ID:history.location.hash.replace("#",""),amount:"",discription:"No Description" ,time:new Date().toString().slice(4,21),type:"Deposit"});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var amount = event => {
    setData({...data,amount:event.target.value})
  };
  var discription = event => {
    setData({...data,discription:event.target.value})
  };
var deposit=()=>{
  if (data.amount == "") {
    swal("Warning", "Enter Amount For Deposit");
  }
  else {
    dispatch(addTransaction(data))
    setOpen(false);
  }
}
  return (
    <div>
      <Button size="normal" variant="contained" color="primary" onClick={handleClickOpen}>
        Deposit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div className="modal" >
          <div className="formHeader">
            <h2>Deposit into account</h2>
          </div>
          <div className="formContent">
            <TextField
              type="number"
              id="outlined-textarea"
              label="Deposit"
              placeholder="Enter Ammount for Deposit"
              variant="outlined"
              fullWidth
              onChange={amount}
            />
            <br />
            <TextField
              type="text"
              id="outlined-textarea"
              label="Description (optional)"
              placeholder="Enter Description"
              variant="outlined"
              fullWidth
              onChange={discription}

            />
            <div className="formButton">
              <Button onClick={deposit} variant="contained" color="primary">
                Deposit
              </Button>
              <Button onClick={handleClose} variant="contained" color="primary">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}