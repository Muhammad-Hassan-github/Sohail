const usersReducer = (state = { initialState: true }, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload]
    case "GET_ALLTRANSACTIONS":
      return action.payload
    case "DELETE_TRANSACTION":
      return state.filter(item => { return item.account_ID !== action.payload._id  })

    default:
      return state
  }
}

export default usersReducer

