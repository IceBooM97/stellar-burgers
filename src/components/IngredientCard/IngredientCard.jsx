import React from "react";
import styles from "./IngredientCard.module.css"
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientCard({ingredient}) {

    return (
        <li className={styles.ingredientCard + ` mt-8`}>
            <img src={ingredient.image} alt={ingredient.name} />
            <span className={styles.price + ` text text_type_digits-default mb-1 mt-1`}>{ingredient.price}{<CurrencyIcon type="primary" />}</span>
            <p className="text text_type_main-small">{ingredient.name}</p>
            <Counter count={1} size="default" extraClass="m-1" />
        </li>
    )
}

export default IngredientCard