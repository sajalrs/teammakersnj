import React from "react";
import Link from "next/link";
import footerStyles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={footerStyles["footer"]}>
      <div className={footerStyles["top-container"]}>
        <div className={footerStyles["details"]}>
          <div className={footerStyles["details-block"]}>
            <h1>PHONE</h1>
            <p>201-500-8076</p>
          </div>

          <div className={footerStyles["details-block"]}>
            <h1>EMAIL</h1>
            <p>info@teammakersnj.com</p>
          </div>
          <div className={footerStyles["details-block"]}>
            <h1>ADDRESS</h1>
            <p>400 Tenafly Road #626 Tenafly, NJ 07670</p>
          </div>
        </div>
      </div>
      <div className={footerStyles["bottom-container"]}>
          <div className={footerStyles["inner-container"]}>
        <div className={footerStyles["copyright-block"]}>
          <span
            className={`${footerStyles["copyright-icon"]} far fa-copyright`}
          ></span>{" "}
          Copyright - Team Makers
        </div>

        <ul className={footerStyles["navigation-list"]}>
          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Home</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>About Us</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Programs {"&"} Services</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Partnerships</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Photo Gallery</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Testimonials</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Contact US</a>
            </Link>
            {"|"}
          </li>

          <li className={footerStyles["navigation-list-item"]}>
            <Link href="#">
              <a>Register</a>
            </Link>
          </li>
        </ul>

        <ul className={footerStyles["social-icons"]}>
          <li>
            <span className="fab fa-facebook-f"></span>
          </li>
          <li>
            <span className="fab fa-google-plus-g"></span>
          </li>
          <li>
            <span className="fab fa-pinterest-p"></span>
          </li>
          <li>
            <span className="fab fa-instagram"></span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
