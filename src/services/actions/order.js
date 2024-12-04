import { placeOrder as placeOrderApi } from '../../utils/api';
import { openOrderModal } from './modal';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILED = 'PLACE_ORDER_FAILED';

export const placeOrder = (ingredients) => {
  return function(dispatch) {
    dispatch({
      type: PLACE_ORDER_REQUEST
    });
    return placeOrderApi(ingredients)
      .then(data => {
        const orderNumber = data.order.number;
        dispatch({
          type: PLACE_ORDER_SUCCESS,
          payload: orderNumber
        });
        dispatch(openOrderModal({ orderNumber }));
        return orderNumber;
      })
      .catch(error => {
        dispatch({
          type: PLACE_ORDER_FAILED,
          payload: error.message
        });
      });
  };
};

