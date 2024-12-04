import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import styles from "./DraggableConstructorElement.module.css";

export const DraggableConstructorElement = ({ ingredient, index, moveIngredient, handleRemove }) => {
  const ref = React.useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'constructorIngredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveIngredient(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'constructorIngredient',
    item: () => {
      return { id: ingredient.uniqueId, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity, display: "flex", position: "relative", cursor: "move" }} data-handler-id={handlerId}>
      <div className={styles.dragIconContainer}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}      
        handleClose={() => handleRemove(ingredient.uniqueId)}          
      />
    </li>
  );
};

