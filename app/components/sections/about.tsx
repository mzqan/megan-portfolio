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
          src="/background_home_ctd.png"
          alt="Background"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
      </div>
      <div className="flex justify-center min-h-[50vh] md:min-h-screen items-center w-full md:w-1/2 py-8 md:py-4 pb-4 md:pb-0 z-10 px-4">
        <div className="relative w-3/5 sm:w-2/5 md:w-3/5 max-w-md aspect-square rounded-full overflow-hidden shadow-lg shadow-black/35">
          <Image src={"/me.jpg"} draggable="false" alt="megan_lee" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
      <div className="flex justify-center items-center py-2 md:py-0 w-full md:w-1/2 z-10 px-4 md:px-0">
        <Card>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-accent-primary p-2 sm:p-3">
            Hello there! I'm a software developer with a passion for accessibility, efficiency and innovation. Currently, I'm studying Computer Engineering at the University of Waterloo.
            <br /><br />
            Besides coding, I love cooking, hiking scenic trails, and reading dystopian novels!
          </p>
        </Card>
      </div>
    </section>
  )
}

export default About
