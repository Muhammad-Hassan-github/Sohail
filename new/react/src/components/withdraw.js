import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { addTransaction } from '../actions/menus-actions'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert';
// import swal from '@sweetalert/with-react'
export default function FormDialog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const counter = useSelector(state => {
    return state.accountsDetails
  });
  const maxAmount = counter.find((item) => item._id === history.location.hash.replace("#", "")).amount;
  const [data, setData] = React.useState({ account_ID: history.location.hash.replace("#", ""), amount: "", discription: "No Discription", time: new Date().toString().slice(4, 21), type: "Withdraw" });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var amount = event => {
    setData({ ...data, amount: event.target.value })
    if (event.target.value > maxAmount) {
      swal("Warning", `Maximum Amount for withdraw ${maxAmount}`);
    }

  };
  var discription = event => {
    setData({ ...data, discription: event.target.value })
  };
  var withdraw = () => {
    if (data.amount > maxAmount) {
      swal("Warning", `Maximum Amount For withdraw ${maxAmount}`);
    }
    else if (data.amount == "") {
      swal("Warning", "Enter Amount For Withdraw");
    }
    else {
      dispatch(addTransaction(data))
      setOpen(false);

    }
  }
  return (
    <div>
      <Button size="normal" variant="contained" color="primary" onClick={handleClickOpen}>
        Withdraw
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div className="modal" >
          <div className="formHeader">
            <h2>Withdraw From Account </h2>
          </div>
          <div className="formContent">
            <TextField
              type="number"
              id="outlined-textarea"
              label={` Maximaum Rs: ${maxAmount}`}
              placeholder="Enter Ammount for withdraw"
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
              <Button onClick={withdraw} variant="contained" color="primary">
                Withdraw
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