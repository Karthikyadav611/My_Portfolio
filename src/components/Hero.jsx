import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import mobileimage from "../assets/mobile_image.svg"; // <-- Add your mobile-friendly image here

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Karthik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Conditional rendering: show image on mobile, canvas on desktop */}
      {isMobile ? (
        <img
          src={mobileimage}
          alt='Mobile Visual'
         className='absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[100%] h-auto object-contain'
    style={{ filter: "drop-shadow(0 0 10px #915EFF)" }}
        />
      ) : (
        <ComputersCanvas />
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
