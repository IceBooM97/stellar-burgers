import React from 'react'
import styles from './BurgerIngredients.module.css'
import { Tabs } from '../Tabs/Tabs'
import CardsContainer from '../CardsContainer/CardsContainer'
import { useSelector } from 'react-redux'




export const BurgerIngredients = () => {

  const ingredients = useSelector(state => state.ingredients.ingredients);
  const bunIngredients = ingredients.filter(ingredient => ingredient.type === 'bun');
  const sauceIngredients = ingredients.filter(ingredient => ingredient.type === 'sauce');
  const mainIngredients = ingredients.filter(ingredient => ingredient.type === 'main');

  return (    
    <section className={styles.burgerIngredients}>
        <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
        <Tabs />
        <div className={styles.scrollContainer + ` costom-scroll`}>
          <CardsContainer ingredients={bunIngredients} groupName={'Булки'}/>
          <CardsContainer ingredients={sauceIngredients} groupName={'Соусы'}/>
          <CardsContainer ingredients={mainIngredients} groupName={'Начинки'}/>
        </div>
    </section>
  )
}
