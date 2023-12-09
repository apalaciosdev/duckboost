import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { CSSTransition } from "react-transition-group"
import Toggle from "./Toggle"
import classNames from "classnames"

export const Header = ({ theme, toggleTheme }) => {
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(mediaQuery.matches)
  }

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }

  const headerClasses = classNames("Header", {
    NavVisible: isNavVisible,
    SmallScreen: isSmallScreen,
  })

  return (
    <header className={headerClasses}>
      <div className="Logo">
        <Image
          src={`/images/logo/logo.png`}
          className="logoImg"
          alt="Logo"
          width={50}
          height={5}
        />
        <p>
          <Link href="/"> DuckBoost </Link>
        </p>
      </div>

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        {(state) => (
          <nav className={`Nav ${state}`}>
            <Link href="/"> Home </Link>
            <Link href="/articles"> Articles </Link>
            <span>
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </span>
          </nav>
        )}
      </CSSTransition>

      <button onClick={toggleNav} className="Burger">
        ☰
      </button>
    </header>
  )
}
