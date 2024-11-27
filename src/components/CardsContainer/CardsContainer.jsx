import React from "react";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from "./CardsContainer.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";


function CardsContainer({ ingredients, groupName }) {
  const dispatch = useDispatch();
  const handleIngredientClick = (ingredient) => {
    console.log("Clicked ingredient:", ingredient);
    dispatch(openModal(ingredient));
  };



  return (
    <>
      <p className="text text_type_main-medium mt-10">{groupName}</p>
      <ul className={styles.cardsContainer}>
        {ingredients.map((ingredient) => {
          return (
            <IngredientCard              
              key={ingredient._id}
              ingredient={ingredient}
              onClick={handleIngredientClick}
            />
          );
        })}
      </ul>
    </>
  );
}

export default CardsContainer;
