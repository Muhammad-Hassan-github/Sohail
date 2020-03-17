
const accountsDetails = (state={initialState:true}, action) => {

  switch (action.type) {

    case "ADD_ITEM":
      return [...state, action.payload]
    case "GET_ALLACCOUNTS":
      return action.payload

    case "updateAccount":
      return [action.payload]

    case "DELETE_ACCOUNT":
      return state.filter((item) => { return item !== action.payload })

    case "UPDATE_ACCOUNT":
      return action.payload

    case "WITHDRAW":
      var obj = state.find(item => item._id === action.payload.account_ID);
      obj.amount = parseInt(obj.amount) - parseInt(action.payload.amount);
      return [...state]
    case "DEPOSIT":
      var obj = state.find(item => item._id === action.payload.account_ID);
      obj.amount = parseInt(obj.amount) + parseInt(action.payload.amount);
      return [...state]
    default:
      return state

  }

}

export default accountsDetails

