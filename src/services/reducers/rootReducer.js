import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import modalReducer from "./modalReducer";
import { orderReducer } from "./order";



export const rootReducer =  combineReducers({
    ingredients: ingredientsReducer,
    modal: modalReducer,
    order: orderReducer    
  });