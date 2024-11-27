import React from "react";
import styles from "./IngredientDetails.module.css";
// import { data } from "../../utils/data";

export const IngredientDetails = (selectedIngredient) => {
  console.log("selectedIngredient", selectedIngredient);
  const ingr = selectedIngredient.ingredient
  const properties = [
    { id: 1, title: "Калории,ккал", property: ingr.calories },
    { id: 2, title: "Белки,г", property: ingr.proteins },
    { id: 3, title: "Жиры,г", property: ingr.fat },
    { id: 4, title: "Углеводы,г", property: ingr.carbohydrates },
  ];
  return (
    <>       
      <img src={ingr.image} alt={ingr.name} className={styles.image} />
      <p className="text text_type_main-medium mt-4 mb-8">{ingr.name}</p>
      <ul className={styles.list + " mb-5"}>
        {properties.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <span className="text text_type_main-default text_color_inactive">{item.title}</span>
            <span className="text text_type_digits-default text_color_inactive">{item.property}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
