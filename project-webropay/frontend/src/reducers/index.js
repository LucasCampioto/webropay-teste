import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import contractsReducer from './contract';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    contractsReducer,
  });