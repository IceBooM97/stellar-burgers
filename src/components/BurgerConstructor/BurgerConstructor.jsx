import React from 'react'
import styles from './BurgerConstructor.module.css'
import { ConstructorElements } from '../ConstructorElements/ConstructorElements'

const color = {
    color: 'red'
}

export const BurgerConstructor = ({ingredients}) => {

  

  return (    
    <section className={`${styles.burgerConstructor} mt-25`}>
        <ConstructorElements ingredients={ingredients}/>
    </section>
  )
}
