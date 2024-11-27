import React, { useCallback } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorElements.module.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useDrop } from "react-dnd";
import { addIngredient, removeIngredient, setBun, updateConstructorIngredients } from "../../services/actions/ingredient";
import { DraggableConstructorElement } from "../DraggableConstructorElement.jsx/DraggableConstructorElement";


export const ConstructorElements = () => {
  const dispatch = useDispatch();
  const { constructorIngredients, bun } = useSelector(state => ({
    constructorIngredients: state.ingredients.constructorIngredients,
    bun: state.ingredients.bun
  }));

  const moveIngredient = useCallback((dragIndex, hoverIndex) => {
    const draggedIngredient = constructorIngredients[dragIndex];
    const updatedIngredients = [...constructorIngredients];
    updatedIngredients.splice(dragIndex, 1);
    updatedIngredients.splice(hoverIndex, 0, draggedIngredient);
    dispatch(updateConstructorIngredients(updatedIngredients));
  }, [constructorIngredients, dispatch]);

  const handleRemove = useCallback((uniqueId) => {
    dispatch(removeIngredient(uniqueId));
  }, [dispatch]);

  const [, drop] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === 'bun') {
        dispatch(setBun(item));
      } else {
        dispatch(addIngredient({ ...item, uniqueId: uuidv4() }));
      }
    },
  });

  return (
    <div ref={drop}>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className={styles.bunElement}>
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          /> 
        ) : (
          <p
            className={
              styles.text + ' text text_type_digits-default text_color_inactive'
            }>
            Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
          </p>)}        
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "16px",
            overflowY: "auto",
            maxHeight: "368px",
          }}
        >
          {constructorIngredients.map((ingr, index) => (
            <DraggableConstructorElement
              key={ingr.uniqueId}
              ingredient={ingr}
              index={index}
              moveIngredient={moveIngredient}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
        <div className={styles.bunElement}>
          {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
      </div> 
    </div>
  );
};

