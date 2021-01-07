import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <h1>PHONE</h1>
          <p>201-500-8076</p>
        </div>
        <div>
          <h1>EMAIL</h1>
          <p>info@teammakersnj.com</p>
        </div>
        <div>
          <h1>ADDRESS</h1>
          <p>400 Tenafly Road #626 Tenafly, NJ 07670</p>
        </div>
      </div>
      <div>
        <div>
          <span className={"far fa-copyright"}></span>Copyright - Team Makers
        </div>
        <div>
          <ul>
            <li>
              <Link href="#"><a>Home</a></Link>
            </li>

            <li>
              <Link href="#"><a>About Us</a></Link>
            </li>

            <li>
              <Link href="#"><a>Programs {"&"} Services</a></Link>
            </li>

            <li>
              <Link href="#"><a>Partnerships</a></Link>
            </li>

            <li>
              <Link href="#"><a>Photo Gallery</a></Link>
            </li>

            <li>
              <Link href="#"><a>Testimonials</a></Link>
            </li>

            <li>
              <Link href="#"><a>Contact US</a></Link>
            </li>

            <li>
              <Link href="#"><a>Register</a></Link>
            </li>

          </ul>
        </div>
        <div>
            <ul>
                <li>
                    <span className="fab fa-facebook-f"></span>
                    <span className="fab fa-google-plus-g"></span>
                    <span className="fab fa-pinterest-p"></span>
                    <span className="fab fa-instagram"></span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
