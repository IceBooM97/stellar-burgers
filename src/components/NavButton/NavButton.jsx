import styles from "./NavButton.module.css";

export const NavButton = ({link, icon, text, id}) => {
  return (
    <li>
      <a key={id} href={link} className={styles.navButton + " text text_type_main-default p-5" }>
        {icon}
        {text}      
      </a>
    </li>
  );
};
