import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: { assetsData: rootReducer },
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export default store;
