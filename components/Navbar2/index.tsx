import React, { useState } from "react";
import navbarStyles from "./navbar.module.css";
import { useRouter } from "next/router";
// type Props = {
//   isFixed: boolean;
//   imageBehindNavbar: boolean;
// };
// const Navbar = ({ isFixed, imageBehindNavbar }: Props) => {
const Navbar = () => {
  const [isActive, setActivity] = useState(false);

  return (
    <div className={navbarStyles["container"]}>
      <div className={navbarStyles["brand"]}>
        <h2>
          Coding<span>Magic</span>
        </h2>
      </div>

      <div
        className={navbarStyles["mobile-nav"]}
        onClick={() => {
          setActivity(!isActive);
        }}
      >
        <a href="#" className={navbarStyles["open-menu"]}>
          MENU
        </a>
      </div>

      <nav
        className={
          isActive
            ? `${navbarStyles["navbar"]} ${navbarStyles["is-active"]}`
            : navbarStyles["navbar"]
        }
      >
        <ul className={navbarStyles["menu"]}>
          <li className={navbarStyles["menu-item"]}>
            <a href="#">Home</a>
          </li>
          <li className={navbarStyles["menu-item"]}>
            <a href="#">About</a>
          </li>
          <li
            className={`${navbarStyles["menu-item"]} ${navbarStyles["has-sub-menu"]}`}
          >
            <a href="#">Services</a>

            <ul className={navbarStyles["sub-menu"]}>
              <li className={navbarStyles["menu-item"]}>
                <a href="#">Web Development</a>
              </li>

              <li className={navbarStyles["menu-item"]}>
                <a href="#">Animation</a>
              </li>
            </ul>
          </li>
          <li className={navbarStyles["menu-item"]}>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a
          href="#"
          className={navbarStyles["close-menu"]}
          onClick={() => {
            setActivity(!isActive);
          }}
        >
          Close Menu
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
