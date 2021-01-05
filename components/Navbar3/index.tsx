import React, { useState } from "react";
import navbarStyles from "./navbar.module.css";
import Link from "next/link";
type Props = {
  isFixed: boolean;
  isTransparent: boolean;
};

const Navbar = ({ isFixed, isTransparent }: Props) => {
  const [isActive, setActivity] = useState(false);
  return (
    <div className={isTransparent ? `` : `${navbarStyles["opaque"]}`}>
      <div
        className={isFixed ? navbarStyles["fixed"] : navbarStyles["not-fixed"]}
      >
        <nav className={navbarStyles["navbar"]}>
          <div className={navbarStyles["logo-menu-container"]}>
            <img
              className={navbarStyles["logo-img"]}
              src="/TM-logo.png"
              alt="Team Makers of New Jersey Logo"
            />

            <div className={navbarStyles["hamburger-and-menu"]}>
              {isActive ? (
                <span
                  className={`${navbarStyles["hamburger"]} fas fa-times-circle`}
                  onClick={() => {
                    setActivity(false);
                  }}
                />
              ) : (
                <span
                  className={`${navbarStyles["hamburger"]} fas fa-list`}
                  onClick={() => {
                    setActivity(true);
                  }}
                />
              )}
              <ul
                className={
                  isActive
                    ? navbarStyles["menu"]
                    : `${navbarStyles["menu"]} ${navbarStyles["is-inactive"]}`
                }
              >
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>Home</a>
                  </Link>
                </li>
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>About Us</a>
                  </Link>
                </li>
                <li
                  className={`${navbarStyles["menu-item"]} ${navbarStyles["has-sub-menu"]}`}
                >
                  <Link href="#">
                    <a>Programs {"&"} Services</a>
                  </Link>
                  <ul className={navbarStyles["sub-menu"]}>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>After-School Programs</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a> Birthday Parties</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Camps</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Workshops</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Carnivals and Fun Days</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Assemblies</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>Partnerships</a>
                  </Link>
                </li>
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>Photo Gallery</a>
                  </Link>
                </li>
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>Testimonials</a>
                  </Link>
                </li>
                <li
                  className={`${navbarStyles["menu-item"]} ${navbarStyles["has-sub-menu"]}`}
                >
                  <Link href="#">
                    <a>Contact Us</a>
                  </Link>

                  <ul className={navbarStyles["sub-menu"]}>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Contact Info</a>
                      </Link>
                    </li>
                    <li className={navbarStyles["sub-menu-item"]}>
                      <Link href="#">
                        <a>Careers</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={navbarStyles["menu-item"]}>
                  <Link href="#">
                    <a>Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
