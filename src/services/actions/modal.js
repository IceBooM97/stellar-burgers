// export const OPEN_ORDER_MODAL = "OPEN_ORDER_MODAL";
// export const OPEN_INGREDIENT_MODAL = "OPEN_INGREDIENT_MODAL";
// export const CLOSE_MODAL = "CLOSE_MODAL";

// // modalActions.js
// export const openOrderModal = () => ({
//     type: OPEN_ORDER_MODAL
//   });
  
//   export const openIngredientModal = (currentIngredient) => ({
//     type: OPEN_INGREDIENT_MODAL,
//     payload: currentIngredient
//   });
  
//   export const closeModal = () => ({
//     type: CLOSE_MODAL
//   });


export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (ingredient) => ({
    type: OPEN_MODAL,
    payload: ingredient,
    isIngredient: true
});

export const openOrderModal = () => ({
  type: OPEN_MODAL,
  isIngredient: false
});

export const closeModal = () => ({
    type: CLOSE_MODAL     
});