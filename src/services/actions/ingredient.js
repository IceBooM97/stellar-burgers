export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const UPDATE_CONSTRUCTOR_INGREDIENTS = 'UPDATE_CONSTRUCTOR_INGREDIENTS';
export const SET_BUN = 'SET_BUN';
export const UPDATE_INGREDIENT_COUNT = 'UPDATE_INGREDIENT_COUNT';

export  const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS,
  payload: ingredients,
});

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});

export const removeIngredient = (uniqueId) => ({
  type: REMOVE_INGREDIENT,
  payload: uniqueId,
});

export const updateConstructorIngredients = (ingredients) => ({
  type: UPDATE_CONSTRUCTOR_INGREDIENTS,
  payload: ingredients,
});

export const setBun = (bun) => ({
  type: SET_BUN,
  payload: bun,
});

export const updateIngredientCount = (ingredientId, count) => ({
  type: UPDATE_INGREDIENT_COUNT,
  payload: { ingredientId, count },
});

