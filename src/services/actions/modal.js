export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (payload, isIngredient = true) => ({
    type: OPEN_MODAL,
    payload,
    isIngredient
});

export const openOrderModal = (orderNumber) => ({
  type: OPEN_MODAL,
  payload: { orderNumber },
  isIngredient: false
});

export const closeModal = () => ({
    type: CLOSE_MODAL     
});

