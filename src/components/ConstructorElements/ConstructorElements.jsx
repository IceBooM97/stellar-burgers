import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { useEffect } from "react"



export const ConstructorElements = ({ingredients}) => {
  

  
   
    return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={ingredients[0].name}
        price={ingredients[0].price}
        thumbnail={ingredients[0].image}
        key="topbun"
      />
      <ConstructorElement
        text={ingredients[2].name}
        price={ingredients[2].price}
        thumbnail={ingredients[2].image}
        key={ingredients[2]._id}
      />
       <ConstructorElement
        text={ingredients[3].name}
        price={ingredients[3].price}
        thumbnail={ingredients[3].image}
        key={ingredients[3]._id}
      />
       <ConstructorElement
        text={ingredients[4].name}
        price={ingredients[4].price}
        thumbnail={ingredients[4].image}
        key={ingredients[4]._id}
      />
       <ConstructorElement
        text={ingredients[5].name}
        price={ingredients[5].price}
        thumbnail={ingredients[5].image}
        key={ingredients[5]._id}
      />
       <ConstructorElement
        text={ingredients[6].name}
        price={ingredients[6].price}
        thumbnail={ingredients[6].image}
        key={ingredients[6]._id}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={ingredients[0].name}
        price={ingredients[0].price}
        thumbnail={ingredients[0].image}
        key="bottombun"
      />
    </div>
  </>
  )
}
