const axios = require('axios');
const addAccount = (Account) => {

    const dataObj1 = {
        amount: Account.amount,
        name: Account.name,
        type: Account.type,
        time: new Date().toString().slice(4, 21),
        discription: "Initial Deposit",
    }

    // const dataObj3 = {
    //     _id: Math.random().toString().slice(2,100),
    //     amount: Account.amount,
    //     name: Account.name,
    //     type: Account.type,
    //     time: new Date().toString().slice(4, 21),
    //     discription: "Initial Deposit",
    // }

    return (dispatch) => {
        axios.post('/createPerson', { data: dataObj1 })
            .then((res1) => {
                dispatch({ type: "ADD_ITEM", payload: res1.data })
                const dataObj2 = {
                    amount: res1.data.amount,
                    time: res1.data.time,
                    account_ID: res1.data._id,
                    type: "Deposit",
                    discription: res1.data.discription
                }
                axios.post('/createTransaction', { data: dataObj2 })
                    .then((res2) => {
                        dispatch({ type: "ADD_TRANSACTION", payload: res2.data })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

const addTransaction = (Account) => {
    return (dispatch) => {
        axios.post('/createTransaction', { data: Account })
            .then((res2) => {
                dispatch({ type: "ADD_TRANSACTION", payload: res2.data })
            })
            .catch((error) => {
                console.log(error);
            });
        if (Account.type == "Withdraw") {
            dispatch({ type: "WITHDRAW", payload: Account })
            axios.post('/withdraw', { _ID: Account.account_ID, amount: Account.amount })
                .then((res2) => {
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            dispatch({ type: "DEPOSIT", payload: Account })

            axios.post('/deposit', { _ID: Account.account_ID, amount: Account.amount })
                .then((res2) => {
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}

const getAllAccounts = () => {

    return (dispatch) => {
        axios.get('/getAllAccounts')
            .then((response) => {
                dispatch({ type: "GET_ALLACCOUNTS", payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('/getAllTransactions')
            .then((response) => {
                dispatch({ type: "GET_ALLTRANSACTIONS", payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}


const deleteAccount = (Account) => {

    return (dispatch) => {
        axios.post('/deletePerson', { data: Account })
            .then((response) => {
                dispatch({ type: "DELETE_ACCOUNT", payload: Account })
                dispatch({ type: "DELETE_TRANSACTION", payload: Account })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

const updatePerson = (Account) => {
    
    return (dispatch) => {
        axios.post('/updatePerson', { data: Account.data })
            .then((response) => {
                dispatch({ type: "UPDATE_ACCOUNT", payload: Account.updatedData })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

const debitCredit = () => {
    return (dispatch) => {
        axios.post('/debits')
            .then((response) => {
                dispatch({ type: "DEBITS", payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
        axios.post('/credits')
            .then((response) => {
                dispatch({ type: "CREDITS", payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });


    }
}


//  function addAccount(Account) {

//     return function (dispatch){
//       return axios.post('/createPerson', { data: Account })
//       .then((response) => {
//       // dispatch
//         dispatch( { type: "ADD_ITEM", payload: Account })
//       })
//     }
//    }



// const addAccount = (Account) => {
//     return { type: "ADD_ITEM", payload: Account }
// }

const updateAccount = (Account) => {
    return { type: "updateAccount", payload: Account }
}


export { addAccount, deleteAccount, updateAccount, getAllAccounts, updatePerson, addTransaction, debitCredit }