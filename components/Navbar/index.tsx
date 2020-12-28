import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Programs {"&"} Services</a>
      </Link>
      <Link href="/">
        <a>Partnerships</a>
      </Link>
      <Link href="/">
        <a>Photo Gallery</a>
      </Link>
      <Link href="/">
        <a>Testimonials</a>
      </Link>
      <Link href="/">
        <a>Contact Us</a>
      </Link>
      <Link href="/">
        <a>Register</a>
      </Link>
    </nav>
  );
};

export default Navbar;
