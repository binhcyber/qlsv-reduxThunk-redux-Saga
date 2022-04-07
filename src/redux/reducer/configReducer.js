import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { sinhvienReducer } from "./sinhvienReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
import { LoadingSagaReducer } from "../saga/LoadingSagaReducer";

const MiddleWareSaga = createSagaMiddleware();
const rootReducer = combineReducers({
  sinhvienReducer,
  LoadingSagaReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, MiddleWareSaga)
);
MiddleWareSaga.run(rootSaga);
export default store;
