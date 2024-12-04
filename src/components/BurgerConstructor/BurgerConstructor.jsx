import React, { useMemo, useState } from "react";
import styles from "./BurgerConstructor.module.css";
import { ConstructorElements } from "../ConstructorElements/ConstructorElements";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../services/actions/order";

import Modal from "../Modal/Modal";

export const BurgerConstructor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); 
  const { constructorIngredients, bun, ingredients } = useSelector((state) => ({
    constructorIngredients: state.ingredients.constructorIngredients,    
    ingredients: state.ingredients.ingredients,
    bun: state.ingredients.bun
  }));
  const { isLoading, error } = useSelector(state => state.order);

  const handleOrderClick = () => {
    const ingredientIds = [
      bun?._id,
      ...constructorIngredients.map(item => item._id),
      bun?._id
    ].filter(Boolean); 
    dispatch(placeOrder(ingredientIds));   
     
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

// const [constructorSum, setConstructorSum] = useState(0);
//   useEffect(() => {
//     const sumOfIngredients = constructorIngredients.reduce((acc, item) => acc + item.price, 0);
//     const sumOfBun = (bun ? bun.price*2 : 0);
//     const totalSum = sumOfIngredients + sumOfBun;
//     setConstructorSum(totalSum);
//   }, [constructorIngredients, bun]);

const constructorSum = useMemo(() => {
  const sumOfIngredients = constructorIngredients.reduce((acc, item) => acc + item.price, 0);
  const sumOfBun = (bun ? bun.price*2 : 0);
  return sumOfIngredients + sumOfBun;
}, [constructorIngredients, bun]);

  return (
    <section className={`${styles.burgerConstructor} mt-25`}>
      <ConstructorElements ingredients={ingredients} />
      <div style={{ display: "flex", gap: "40px", justifyContent: "flex-end" }} className="mt-10 mr-10">
        <span style={{ display: "flex", alignItems: "center" }}>
          <p className="text text_type_digits-medium">{constructorSum}</p>
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium" onClick={handleOrderClick} disabled={isLoading || !bun || constructorIngredients.length === 0}>
          {isLoading ? 'Оформление...' : 'Оформить заказ'}
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isIngredient={false}
      />
      {error && (
        <p className="text text_type_main-default text_color_error mt-4">{error}</p>
      )}
    </section>
  );
};
