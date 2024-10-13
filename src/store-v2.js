import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
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
