import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { NavButton } from "../NavButton/NavButton";

import styles from "./Header.module.css"

const buttons = [
  {
    id: 1,
    name: "Конструктор",
    icon: <BurgerIcon type="primary" />
  },
  {
    id: 2,
    name: "Лента заказов",
    icon: <ListIcon type="primary" />
  },
  {id: 3},
  {
    id: 4,
    name: "Личный кабинет",
    icon: <ProfileIcon type="primary" />
  }
];

function Header() {
  return (
    <header className={styles.header}>
      <div> 
        <ul className={`${styles.headerContainer} pt-4 pb-4`}>
          {buttons.map((btn)=>{
            if (btn.id===3){
              return(
              <li key={'logo'} className={styles.logo}>
              <a href="#"><Logo /></a>
            </li>
            )
            } else {
              return(
              <NavButton
                key={btn.id}
                link={"#"}
                icon={btn.icon}
                text={btn.name}
              />)
            }
          })}                
        </ul>
      </div>
    </header>
  );
}

export default Header;
