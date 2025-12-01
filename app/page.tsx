"use client"

import Nav from "@/components/ui/nav"
import Welcome from "@/components/sections/welcome"
import About from "@/components/sections/about"
import Experience from "./components/sections/experience"

const Home = () => {
  return (
    <>
      <Nav />
      <Welcome />
      <About />
      <Experience />
    </>
  )
}

export default Home
