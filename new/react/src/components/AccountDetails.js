import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, protein) {
  return { name, protein };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const history = useHistory();
  const classes = useStyles();
  const _id = history.location.hash.replace("#", "")
  const counter = useSelector(state => {
    return state.accountsDetails
  });

  var user = counter.find(item => item._id === _id);
  const rows = [
    createData('Account #', user._id),
    createData('Full Name', user.name),
    createData('Registerd At', user.time),
    createData('Account Type', user.type),
    createData('Current Balance', user.amount),
  ];
  return (
    <div className="details">
      <TableContainer component={Paper}>
        <div className="TableTitle"><span>Account Details</span></div>
        <Table className={classes.table} aria-label="customized table" >
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align='left' className="row1">{row.name}</StyledTableCell>
                <StyledTableCell align='left' className="row1">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <div className="TableTitle" style={{ background: "white" }}>
          <Withdraw />
          <Deposit />
        </div>
      </TableContainer>
    </div>
  );
}