import Nav from "@/components/ui/nav"
import Welcome from "@/components/sections/welcome"
import About from "@/components/sections/about"
import Experience from "./components/sections/experience"
import FadeInWrapper from "@/components/ui/fadeIn"

const Home = () => {
  return (
    <FadeInWrapper> 
      <Nav />
      <Welcome />
      <About />
      <Experience />
    </FadeInWrapper>
  )
}

export default Home
