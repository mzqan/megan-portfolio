"use client"

import Card from "@/components/ui/card"

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row w-full bg-[url(/background_home_ctd.png)] bg-cover bg-top py-12"
    >
      <div className="flex justify-center items-center w-full md:w-1/2 py-4 pb-8 md:pb-0">
        <img
          src={"/image.jpg"}
          draggable="false"
          className="w-3/5 max-w-xs rounded-full shadow-lg"
        />
      </div>
      <div className="flex justify-center items-start py-4 w-full md:w-1/2 md:items-center">
        <div className="w-full ">
          <Card>
            Hello there! I'm a software developer with a passion for
            accessibility, efficiency and innovation.
            <br />
            Currently, I'm studying Computer Engineering at the University of
            Waterloo🌼
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About
