import { motion } from "framer-motion"
import Image from "next/image"

const Welcome = () => {
  return (
    <section id="home" className="relative flex w-full h-screen justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-fixed">
        <Image
          src={"/background_home.png"}
          alt="Home Background"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>
      <div className="justify-center md:w-3/5 relative z-10">
        <motion.div
          className="w-full relative h-[60vh] mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={"/welcome_banner.png"}
            draggable="false"
            alt="Hey, Im Megan Lee"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
