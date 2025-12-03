import Card from "@/components/ui/card"
import Image from "next/image"

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row w-full justify-center relative"
    >
      <div className="absolute inset-0 z-0 bg-fixed">
        <Image
          src={"/background_home_ctd.png"}
          alt="Background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <div className="flex justify-center min-h-screen items-center w-full md:w-1/2 py-4 pb-8 md:pb-0 z-10">
        <div className="relative w-3/5 max-w-md aspect-square rounded-full overflow-hidden shadow-lg">
          <Image src={"/me.jpg"} draggable="false" alt="megan_lee" fill style={{ objectFit: "cover" }} />
        </div>
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
