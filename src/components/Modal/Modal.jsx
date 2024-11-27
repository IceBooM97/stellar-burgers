import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

const modalRoot = document.getElementById("react-modals");

const Modal = ({
  isOpen,  
  headerText,
  onClose,
  selectedIngredient,
  isIngredient,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent + " p-10"}>
        <div className={styles.modalHeader}>
          {headerText && (
            <h2 className="text text_type_main-large">{headerText}</h2>
          )}
          <button className={styles.closeIcon}>
            <CloseIcon type="primary" onClick={onClose} />
          </button>
        </div>
        <div className={styles.innerContainer}>
          {isIngredient ? (
            <IngredientDetails ingredient={selectedIngredient} />
          ) : (
            <OrderDetails />
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
