import { useEffect, useState } from "react";

import styles from "./App.module.css";

import { getCards } from "../../utils/api.js";
import Loader from "../Loader/Loader.jsx";
import Header from "../Header/Header";
// import { data } from '../../utils/data';
import Modal from "../Modal/Modal";

import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { useDispatch, useSelector } from "react-redux";
import { setIngredients } from "../../services/actions/ingredient";
import { closeModal } from "../../services/actions/modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const isIngredient = useSelector((state) => state.modal.isIngredient);
  const selectedIngredient = useSelector(
    (state) => state.modal.selectedIngredient
  );

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    getCards()
      .then((response) => {
        // setCardData(ingredients.data);
        dispatch(setIngredients(response.data));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.app}>
        <Header className="text text_type_main-default" />
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedIngredient={selectedIngredient}
          isIngredient={isIngredient}
        />
      </div>
    </DndProvider>
  );
}


    

export default App;
