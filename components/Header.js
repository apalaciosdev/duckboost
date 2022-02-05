import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'

import { CSSTransition } from "react-transition-group";
import Toggle from './Toggle';


export const Header = ({theme, toggleTheme}) => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">

      <p className="Logo"> <Link href="/"> BlogStack </Link></p>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link href="/"> Home </Link>
          <Link href="/articles"> Articles </Link>
          <Link href="/contact"> Contact </Link>
          <span><Toggle theme={theme} toggleTheme={toggleTheme} /></span>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        ☰
      </button>
    </header>
  );
}