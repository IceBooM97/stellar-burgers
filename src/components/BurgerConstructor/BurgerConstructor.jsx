import React from "react";
import styles from "./BurgerConstructor.module.css";
import { ConstructorElements } from "../ConstructorElements/ConstructorElements";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

export const BurgerConstructor = () => {
  const ingredients = useSelector(state => state.ingredients.ingredients);
  return (
    <section className={`${styles.burgerConstructor} mt-25`}>
      <ConstructorElements ingredients={ingredients} />
      <div style={{ display: "flex", gap: "40px", justifyContent: "flex-end" }} className="mt-10 mr-10">
        <span style={{ display: "flex", alignItems: "center" }}>
          <p className="text text_type_digits-medium">650</p>
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
