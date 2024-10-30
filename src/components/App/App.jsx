import { useEffect, useState } from 'react';

import styles from "./App.module.css"

import { getCards } from "../../utils/api.js"
import Loader from '../Loader/Loader.jsx';
import Header from '../Header/Header';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';



function App() {

  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCards()
      .then((ingredients) => {
        setCardData(ingredients.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className={styles.app}>      
      <Header className="text text_type_main-default"/>
      <main className={styles.main}>
        <BurgerIngredients ingredients={cardData}/>    
        <BurgerConstructor ingredients={cardData}/>
      </main>
      
      
      
    </div>
  );
}

export default App;
