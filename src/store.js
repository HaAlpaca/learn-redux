import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, "buy a new GTR"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// store.dispatch(createCustomer("Haalpaca", "2131321"));
// store.dispatch(deposit(250));
// console.log(store.getState());
