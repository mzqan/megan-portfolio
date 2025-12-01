"use client"

import Card from "@/components/ui/card"

const About = () => {
  return (
    <section
      id="about"
      className="
        flex flex-col md:flex-row w-full justify-center 
        bg-[url(/background_home_ctd.png)] bg-cover bg-top

        relative
        after:absolute after:inset-0
        after:bg-linear-to-t
        after:from-foreground
        after:via-foreground/25 after:via-7.5%
        after:to-transparent after:to-15%
        after:z-0
      "
    >
      <div className="flex justify-center min-h-screen items-center w-full md:w-1/2 py-4 pb-8 md:pb-0 z-10">
        <img src={"/image.jpg"} draggable="false" className="w-3/5 max-w-md rounded-full shadow-lg" />
      </div>
      <div className="flex justify-center items-center py-4 w-full md:w-1/2 z-10">
        <Card>
          <p className="text-lg leading-8 text-accent-primary p-3">
            Hello there! I'm a software developer with a passion for accessibility, efficiency and innovation.
            <br />
            Currently, I'm studying Computer Engineering at the University of Waterloo🌼
          </p>
        </Card>
      </div>
    </section>
  )
}

export default About
