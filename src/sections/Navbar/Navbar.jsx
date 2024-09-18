import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-bootstrap"; 
import Icons from "../../statics";
import { useTheme } from "../../common/ThemeContext";


const Navbar = () => {

  const {theme, toggleTheme} = useTheme();
  const themeMode = theme === "light" ? "Light mode" : "Dark mode";

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{<Icons.CodingIcon/>}</div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li onClick={toggleTheme}>
          {theme === "light" ? <Icons.SunIcon /> : <Icons.MoonIcon /> }
          <span>{themeMode}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
