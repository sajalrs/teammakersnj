import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const [isFixed, setFixed] = useState(false);
  useEffect(() => {
    const toggleNavbarFix = () => {
      const scrollY = window.scrollY;
      if(scrollY > 88 && !isFixed){
        setFixed(true);
      } else if(scrollY < 88 && isFixed){
        setFixed(false);
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
    </Head>
    <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          background-color: blue;
        }
      `}</style>
    <header>
      <Navbar isFixed={isFixed}/>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>)
};

export default Layout;
