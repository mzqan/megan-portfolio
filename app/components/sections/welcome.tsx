"use client"

import { motion } from "framer-motion"
import { useEffect } from 'react';
import Image from "next/image";

const BACKGROUND_IMAGE_PATH = '/background_home.png';

const Welcome = () => {
  
  useEffect(() => {
    const existingLink = document.querySelector(`link[href="${BACKGROUND_IMAGE_PATH}"][rel="preload"]`);
    
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = BACKGROUND_IMAGE_PATH;
      link.as = 'image';
      link.type = 'image/png'; 

      document.head.appendChild(link);
    }
  }, [])

  return (
    <section
      id="home"
      className="flex w-full h-screen justify-center items-center bg-[url(/background_home.png)] bg-cover bg-bottom bg-no-repeat"
    >
      <div className="justify-center md:w-3/5">
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
            src={"/welcome_banner2.png"} 
            draggable="false" 
            alt='Hey, Im Megan Lee'
            fill
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
