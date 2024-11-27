// import { CLOSE_MODAL, OPEN_INGREDIENT_MODAL, OPEN_ORDER_MODAL } from "../actions/modal";

// const initialState = {
//     isIngredientDetail: false,
//     isModalOpen: false,
//     currentIngredient: null,
//   };
  
//   const modalReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case OPEN_ORDER_MODAL:
//         return {
//           ...state,
//           isModalOpen: true,
//           isIngredientDetail: false,
//           currentIngredient: null,
//         };
//       case OPEN_INGREDIENT_MODAL:
//         return {
//           ...state,
//           isModalOpen: true,
//           isIngredientDetail: true,
//           currentIngredient: action.payload,
//         };
//       case CLOSE_MODAL:
//         return {
//           ...state,
//           isModalOpen: false,
//           currentIngredient: null,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default modalReducer;

import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal";

const initialState = {
    isModalOpen: false,
    selectedIngredient: null,
    isIngredient: false
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
                selectedIngredient: action.payload,
                isIngredient: action.isIngredient
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                selectedIngredient: null,
                isIngredient: false
            };
        default:
            return state;
    }
};

export default modalReducer;