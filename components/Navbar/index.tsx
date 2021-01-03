import React from "react";
import Link from "next/link";
import navbarStyles from "./navbar.module.css";

type Props = {
  isFixed: boolean;
};

const Navbar = ({ isFixed }: Props) => {
  return (
    <div className={navbarStyles["navbar"]}>
      <div
        className={isFixed ? navbarStyles["fixed"] : navbarStyles["not-fixed"]}
      >
        <nav>
          <div className={navbarStyles["inner-container"]}>
          <Link href="/">
            <a>
              <img id={navbarStyles["logo-img"]} src="/TM-logo.png" />
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Programs {"&"} Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Partnerships</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Photo Gallery</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Testimonials</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Register</a>
              </Link>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
