
const debitCredit = (state = { debit: "", credit: "" }, action) => {

  switch (action.type) {
    case "DEBITS":
      let sumDebits = 0;
      action.payload.map((value, key) => {
        sumDebits = sumDebits + value.amount
      })
      return { ...state, debit: sumDebits }
    case "CREDITS":
      let sumCredits = 0;
      action.payload.map((value, key) => {
        sumCredits = sumCredits + value.amount
      })
      return { ...state, credit : sumCredits }
    default:
      return state
  }

}

export default debitCredit

