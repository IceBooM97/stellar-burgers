import React from "react";
import doneImage from "../../images/done1.png";
export const OrderDetails = () => {
  return (
    <>
      <p
        style={{
          textShadow:
            "rgba(51, 51, 225, 0.5) 0px 0px 15px, rgba(51, 51, 225, 0.25) 0px 0px 15px, rgba(51, 51, 225, 0.25) 0px 0px 15px",
        }} className="text text_type_digits-large mt-15"
      >
        034536
      </p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img src={doneImage} alt="Картинка выполненной работы" className="mt-15 mb-15"/>
      <p className="text text_type_main-small mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
    </>
  );
};
