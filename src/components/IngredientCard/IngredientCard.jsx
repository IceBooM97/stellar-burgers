import React from "react";
import styles from "./IngredientCard.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

function IngredientCard({ ingredient, onClick, count }) {

  // ТЕСТ DND
  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }); 

  

  return (
    <li   
      ref={drag}   
      className={styles.ingredientCard + ` mt-8`}      
      onClick={() => onClick(ingredient)}
      style={{ opacity: isDragging ? 0.5 : 1}}      
    >
      <img src={ingredient.image} alt={ingredient.name} />
      <span
        className={styles.price + ` text text_type_digits-default mb-1 mt-1`}
      >
        {ingredient.price}
        {<CurrencyIcon type="primary" />}
      </span>
      <p className="text text_type_main-small">{ingredient.name}</p>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </li>
  );
}

export default IngredientCard;
