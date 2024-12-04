import React from "react";
import { useSelector } from "react-redux";
import doneImage from "../../images/done1.png";
import styles from "./OrderDetails.module.css";
import Loader from "../Loader/Loader";

export const OrderDetails = () => {
  const { orderNumber, isLoading, error } = useSelector(state => state.order);

  if (isLoading) {
    <Loader />
  }
  if (error) {
    return <p className="text text_type_main-medium text_color_error">Произошла ошибка при оформлении заказа</p>;
  }

  return (
    <div className={styles.orderDetails}>
      <p
        className={`text text_type_digits-large mb-8 ${styles.orderNumber}`}
      >
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={doneImage} alt="Заказ принят" className={`${styles.doneImage} mb-15`} />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

