import React, { useRef } from 'react'
import styles from './BurgerIngredients.module.css'
import { Tabs } from '../Tabs/Tabs'
import CardsContainer from '../CardsContainer/CardsContainer'
import { useSelector } from 'react-redux'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export const BurgerIngredients = () => {
  const ingredients = useSelector(state => state.ingredients.ingredients);
  const bunIngredients = ingredients.filter(ingredient => ingredient.type === 'bun');
  const sauceIngredients = ingredients.filter(ingredient => ingredient.type === 'sauce');
  const mainIngredients = ingredients.filter(ingredient => ingredient.type === 'main');

  const containerRef = useRef(null);

  const activeSection = useScrollSpy(
    ['bun', 'sauce', 'main'],
    containerRef,
    { rootMargin: '0px 0px -90% 0px', threshold: 0 }
  );

  const handleTabClick = (value) => {
    const element = document.getElementById(value);
    if (element && containerRef.current) {
      const topOffset = element.offsetTop - containerRef.current.offsetTop;
      containerRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (    
    <section className={styles.burgerIngredients}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <Tabs current={activeSection} onTabClick={handleTabClick} />
      <div ref={containerRef} className={`${styles.scrollContainer} custom-scroll`}>
        <CardsContainer id="bun" ingredients={bunIngredients} groupName={'Булки'}/>
        <CardsContainer id="sauce" ingredients={sauceIngredients} groupName={'Соусы'}/>
        <CardsContainer id="main" ingredients={mainIngredients} groupName={'Начинки'}/>
      </div>
    </section>
  )
}

