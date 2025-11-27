"use client"

import { motion } from "framer-motion"

const Welcome = () => {
    return (
        <section id="home" className="flex w-full h-screen justify-center items-center bg-[url(/background_home.png)] bg-cover bg-bottom bg-no-repeat">
            <div className="justify-center md:w-3/5">
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img
                        src={"/welcome_banner.png"}
                        draggable="false"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Welcome
