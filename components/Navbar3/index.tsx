import React, { useState } from "react";
import navbarStyles from "./navbar.module.css";
const Navbar = () => {
  const [isActive, setActivity] = useState(false);
  return (
    <div>
      <nav className={navbarStyles["navbar"]}>
        <div className={navbarStyles["logo-menu-container"]}>
          <img
            className={navbarStyles["logo-img"]}
            src="/TM-logo.png"
            alt="Team Makers of New Jersey Logo"
          />

          {isActive ? (
            <span
              className="fas fa-times-circle"
              onClick={() => {
                setActivity(false);
              }}
            />
          ) : (
            <span
              className="fas fa-list"
              onClick={() => {
                setActivity(true);
              }}
            />
          )}
          <ul
            className={
              isActive
                ? `${navbarStyles["menu"]} ${navbarStyles["is-active"]}`
                : navbarStyles["menu"]
            }
          >
            <li className={navbarStyles["menu-item"]}>Home</li>
            <li className={navbarStyles["menu-item"]}>About Us</li>
            <li
              className={`${navbarStyles["menu-item"]} ${navbarStyles["has-sub-menu"]}`}
            >
              Programs {"&"} Services
              <ul className={navbarStyles["sub-menu"]}>
                <li className={navbarStyles["sub-menu-item"]}>
                  After-School Programs
                </li>
                <li className={navbarStyles["sub-menu-item"]}>
                  Birthday Parties
                </li>
                <li className={navbarStyles["sub-menu-item"]}>Camps</li>
                <li className={navbarStyles["sub-menu-item"]}>Workshops</li>
                <li className={navbarStyles["sub-menu-item"]}>
                  Carnivals and Fun Days
                </li>
                <li className={navbarStyles["sub-menu-item"]}>Assemblies</li>
              </ul>
            </li>
            <li className={navbarStyles["menu-item"]}>Partnerships</li>
            <li className={navbarStyles["menu-item"]}>Photo Gallery</li>
            <li className={navbarStyles["menu-item"]}>Testimonials</li>
            <li
              className={`${navbarStyles["menu-item"]} ${navbarStyles["has-sub-menu"]}`}
            >
              Contact Us
              <ul className={navbarStyles["sub-menu"]}>
                <li className={navbarStyles["sub-menu-item"]}>Contact Info</li>
                <li className={navbarStyles["sub-menu-item"]}>Careers</li>
              </ul>
            </li>
            <li className={navbarStyles["menu-item"]}>Register</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
