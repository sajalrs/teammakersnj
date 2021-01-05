import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
  isNavbarTransparent?: boolean;
};

const Layout = ({ children, title = "This is the default title", isNavbarTransparent = false }: Props) => {
  const [isNavbarFixed, setNavbarFix] = useState(false);
  useEffect(() => {
    const toggleNavbarFix = () => {
      if(window.scrollY > 100 && !isNavbarFixed){
        setNavbarFix(true);
      } else {
        setNavbarFix(false);
      }
    }
    window.addEventListener("scroll", toggleNavbarFix);
  }, [])
  
  return (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossOrigin={"anonymous"}
        />
    </Head>
    <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: blue;
        }
      `}</style>
    <header>
      <Navbar isFixed={isNavbarFixed} isTransparent={isNavbarTransparent}/>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>)
};

export default Layout;
