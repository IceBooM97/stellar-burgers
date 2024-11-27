import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import modalReducer from "./modalReducer";



export const rootReducer =  combineReducers({
    ingredients: ingredientsReducer,
    modal: modalReducer,    
  });