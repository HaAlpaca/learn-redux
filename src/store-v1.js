import { combineReducers, createStore } from "redux";

const initStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};
const initStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

function accountReducer(state = initStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "account/requestLoan":
            if (state.load > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        default:
            return state;
    }
}

function customerReducer(state = initStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            };
        case "customer/updateName":
            return {
                ...state,
                fullName: action.payload.fullName,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const store = createStore(rootReducer);
// console.log("Hey Redux");
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// store.dispatch({
//     type: "account/requestLoan",
//     payload: {
//         amount: 1000,
//         purpose: "buy a bike",
//     },
// });
// console.log(store.getState());
// store.dispatch({
//     type: "account/payLoan",
// });

function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
    return {
        type: "account/requestLoan",
        payload: {
            amount: amount,
            purpose: purpose,
        },
    };
}
function payLoan() {
    return { type: "account/payLoan" };
}

function createCustomer(fullName, nationalID) {
    return {
        type: "customer/createCustomer",
        payload: { fullName, nationalID, createdAt: new Date().toISOString() },
    };
}

function updateName(fullName) {
    return { type: "customer/updateName", payload: fullName };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, "buy a new GTR"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("Haalpaca", "2131321"));
store.dispatch(deposit(250));
console.log(store.getState());
