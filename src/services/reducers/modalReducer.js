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