import { createReducer } from "@reduxjs/toolkit";
import { setReduxState } from "./Actions";
import { combineReducers } from "redux";

const initialState = {};

const Reducer = createReducer(initialState, {
  [setReduxState]: (state, action) => ({
    ...state,
    ...(action?.payload ?? {}),
  }),
});

const RootReducer = combineReducers({ assets: Reducer });

export default RootReducer;
