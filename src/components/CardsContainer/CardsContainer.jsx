import React from "react";
import IngredientCard from "../IngredientCard/IngredientCard";
import styles from './CardsContainer.module.css'

function CardsContainer({ingredients, groupName}) {
    
    

    return (
        <>
            <p className="text text_type_main-medium mt-10">{groupName}</p>
            <ul className={styles.cardsContainer}>            
                {ingredients.map((ingredient) => {
                return <IngredientCard key={ingredient._id} ingredient={ingredient} />
                })}
            </ul>
        </>
    )
}

export default CardsContainer