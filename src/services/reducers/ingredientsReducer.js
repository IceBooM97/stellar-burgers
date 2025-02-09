import {
  SET_INGREDIENTS,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  SET_BUN,
  UPDATE_INGREDIENT_COUNT,
} from "../actions/ingredient";

const initialState = {
  ingredients: [],
  constructorIngredients: [],
  bun: null,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.payload,
        ],
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter(
          (item) => item.uniqueId !== action.payload
        ),
      };
    case UPDATE_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        constructorIngredients: action.payload,
      };
    case SET_BUN:
      return {
        ...state,
        bun: action.payload,
      };
    case UPDATE_INGREDIENT_COUNT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action.payload.ingredientId
            ? { ...ingredient, __v: action.payload.count }
            : ingredient
        ),
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
