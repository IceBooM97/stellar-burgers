import React from "react";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./CardsContainer.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";

function CardsContainer({ id, ingredients, groupName }) {
  const dispatch = useDispatch();
  const handleIngredientClick = (ingredient) => {
    console.log("Clicked ingredient:", ingredient);
    dispatch(openModal(ingredient));
  };

  return (
    <div id={id} className="mt-10">
      <h2 className="text text_type_main-medium">{groupName}</h2>
      <ul className={styles.cardsContainer}>
        {ingredients.map((ingredient) => (
          <IngredientCard              
            key={ingredient._id}
            ingredient={ingredient}
            onClick={handleIngredientClick}
            count={ingredient.__v}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardsContainer;

