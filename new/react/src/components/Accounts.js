import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux'
import { addAccount, updateAccount, deleteAccount, getAllAccounts, updatePerson } from '../actions/menus-actions'

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import preloader from "../images/preloder.gif"


import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
export default function MaterialTableDemo() {
 
  const history = useHistory();
  const  counter =  useSelector(state => {
   return state.accountsDetails
  });
  const dispatch = useDispatch();

 
  
  const [state, setState] = React.useState( counter.initialState == true ? window.location.reload(false) : {
    columns: [
      { title: 'Account ID', field: '_id', editable: 'never', cellStyle: { color: "blue" }, detailPanelColumnAlignment:"right" },
      { title: 'Full Name', field: 'name', disableClick: true },
      { title: 'Registerd At', field: 'time', editable: 'never', disableClick: true },
      {
        title: 'Type',
        field: 'type',
        disableClick: true,
        lookup: { current: 'Current', saving: 'Saving' },
      },
      { title: 'Amount', field: 'amount', type: 'numeric', disableClick: true },
    ],
        data:counter
        
  });
  

  console.log("counter",counter)
  console.log("state",state.data)


  return (
    counter.initialState == true ? <div className="preloader"><img src={preloader}  alt="loading" /></div> :
    <div className="account">
    <MaterialTable
      onRowClick={(event) => event.target.innerText=="" ? "":  history.push("user/" + "#" + event.target.innerText)}
      icons={tableIcons}
      title="ACCOUNTS"
      columns={state.columns}
      data={state.data}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     dispatch(addAccount(newData))
        //     setTimeout(() => {
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         console.log("New data", newData)
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),

        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  dispatch(updatePerson({ updatedData: data, data: newData }))
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),

        onRowDelete: oldData =>
          new Promise(resolve => {
            dispatch(deleteAccount(oldData))
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}

    />
    </div>

  );
}