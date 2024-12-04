import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export const Tabs = ({ current, onTabClick }) => {            
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={() => onTabClick('bun')}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={() => onTabClick('sauce')}>
        Соусы
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={() => onTabClick('main')}>
        Начинки
      </Tab>
    </div>
  )      
}

