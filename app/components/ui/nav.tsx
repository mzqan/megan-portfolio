"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "experiences", href: "#experience" },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`
        fixed top-4 sm:top-10 left-1/2 -translate-x-1/2 z-50 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 transition-all duration-300
        ${scrolled ? "rounded-full backdrop-filter backdrop-blur-sm border-white shadow-lg" : ""}
      `}
    >
      <div className="flex justify-center items-center w-full mx-auto px-2 sm:px-3 py-2 sm:py-3">
        <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-base sm:text-xl md:text-2xl font-bold text-primary hover:text-accent-primary transition-colors capitalize"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
