import React from "react";
import Link from "next/link";
import navbarStyles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={navbarStyles["navbar"]}>
    <nav>
      <ul>
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
    </nav>
    </div>
  );
};

export default Navbar;
