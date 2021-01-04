import React, {useState} from "react";
import navbarStyles from "./navbar.module.css";
import { useRouter } from "next/router";
type Props = {
  isFixed: boolean;
  imageBehindNavbar: boolean;
};

const Navbar = ({ isFixed, imageBehindNavbar }: Props) => {
  const [isLarge, setIsLarge] = useState(false);
  const router = useRouter();
  return (
    <div
      className={
        imageBehindNavbar
          ? ``
          : `${navbarStyles["image-not-behind"]}`
      }
    >
      <div className={navbarStyles["navbar"]}> 
        <div
          className={
            isFixed ? navbarStyles["fixed"] : navbarStyles["not-fixed"]
          }
        >
          <nav>
            <div className={navbarStyles["inner-container"]}>
              <a>
                <img id={navbarStyles["logo-img"]} src="/TM-logo.png" />
              </a>

              <ul className={isLarge? navbarStyles["horizontal-list"]: navbarStyles["vertical-list"]}>
                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Home</a>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>About Us</a>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li className={navbarStyles["exposed"]}>
                    <ul>
                      <li
                        onClick={() => {
                          router.push("/");
                        }}
                      >
                        <a>Programs {"&"} Services</a>
                      </li>
                      <div className={navbarStyles["sub-menu"]}>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>After-School Programs</a>
                        </li>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Birthday Parties</a>
                        </li>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Camps</a>
                        </li>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Workshops</a>
                        </li>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Carnivals {"&"} Fun Days</a>
                        </li>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Assemblies</a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Partnerships</a>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Photo Gallery</a>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Testimonials</a>
                  </li>
                </div>
                <div className={navbarStyles["portal"]}>
                  <li className={navbarStyles["exposed"]}>
                    <ul>
                      <li
                        onClick={() => {
                          router.push("/");
                        }}
                      >
                        <a>Contact Us</a>
                      </li>
                      <div className={navbarStyles["sub-menu"]}>
                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Contact Info</a>
                        </li>

                        <li
                          onClick={() => {
                            router.push("/");
                          }}
                        >
                          <a>Careers</a>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>

                <div className={navbarStyles["portal"]}>
                  <li
                    className={navbarStyles["exposed"]}
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <a>Register</a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
