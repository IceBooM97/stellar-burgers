import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILED
  } from '../actions/order';
  
  const initialState = {
    orderNumber: null,
    isLoading: false,
    error: null
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case PLACE_ORDER_SUCCESS:
        return {
          ...state,
          orderNumber: action.payload,
          isLoading: false,
          error: null
        };
      case PLACE_ORDER_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  