import React, { useCallback, useEffect } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorElements.module.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import {
  addIngredient,
  removeIngredient,
  setBun,
  updateConstructorIngredients,
  updateIngredientCount,
} from "../../services/actions/ingredient";
import { DraggableConstructorElement } from "../DraggableConstructorElement.jsx/DraggableConstructorElement";

export const ConstructorElements = () => {
  const dispatch = useDispatch();
  const { constructorIngredients, bun, ingredients } = useSelector((state) => ({
    constructorIngredients: state.ingredients.constructorIngredients,
    bun: state.ingredients.bun,
    ingredients: state.ingredients.ingredients,
  }));
  // console.log('constructorIngredients: ',constructorIngredients, 'bun: ', bun, 'ingredients: ', ingredients);

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      const draggedIngredient = constructorIngredients[dragIndex];
      const updatedIngredients = [...constructorIngredients];
      updatedIngredients.splice(dragIndex, 1);
      updatedIngredients.splice(hoverIndex, 0, draggedIngredient);
      dispatch(updateConstructorIngredients(updatedIngredients));
    },
    [constructorIngredients, dispatch]
  );

  const handleRemove = useCallback(
    (uniqueId) => {
      dispatch(removeIngredient(uniqueId));
    },
    [dispatch]
  );

  const [, drop] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(addIngredient({ ...item, uniqueId: uuidv4() }));
      }
    },
  });

  useEffect(() => {
    const ingredientCounts = constructorIngredients.reduce(
      (acc, ingredient) => {
        acc[ingredient._id] = (acc[ingredient._id] || 0) + 1;
        return acc;
      },
      {}
    );
    if (bun) {
      ingredientCounts[bun._id] = 2;
    }

    ingredients.forEach((ingredient) => {
      const count = ingredientCounts[ingredient._id] || 0;
      if (ingredient.__v !== count) {
        dispatch(updateIngredientCount(ingredient._id, count));
      }
    });
  }, [constructorIngredients, bun, ingredients, dispatch]);

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
              thumbnail={bun.image_mobile}
            />
          ) : (
            <p
              className={
                styles.text +
                " text text_type_main-medium text_color_inactive"
              }
            >
              Пожалуйста, перенесите сюда булку и ингредиенты для создания
              заказа
            </p>
          )}
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
              thumbnail={bun.image_mobile}
            />
          )}
        </div>
      </div>
    </div>
  );
};
