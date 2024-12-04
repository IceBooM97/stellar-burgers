import React from 'react';
import styles from "./NavButton.module.css";

export const NavButton = ({ link, icon, text, isActive }) => {
  return (
    <li>
      <a 
        href={link} 
        className={`${styles.navButton} text text_type_main-default p-5 ${isActive ? 'text_color_primary' : 'text_color_inactive'}`}
      >
        {React.cloneElement(icon, { type: isActive ? 'primary' : 'secondary' })}
        {text}      
      </a>
    </li>
  );
};

