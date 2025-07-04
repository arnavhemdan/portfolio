import { motion } from "framer-motion";


import { styles } from "../styles";

import { useEffect } from "react";
import AvatarCanvas from "./canvas/AvatarCanvas";
const Hero = () => {
useEffect(() => {
  if (window.anime) {
    window.anime.timeline()
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i
      })
      .finished
      .then(() => {
        const textWrapper = document.querySelector('.ml3');
        if (textWrapper) {
          const text = textWrapper.textContent;
          textWrapper.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
          textWrapper.style.opacity = 1; // show container

          window.anime.timeline()
            .add({
              targets: '.ml3 .letter',
              opacity: [0, 1],
              easing: "easeInOutQuad",
              duration: 2250,
              delay: (el, i) => 50 * (i + 1)
            });
        }
      });
  }
}, []);


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

          <div>
<h1 className={`ml15 text-white text-[20px] sm:text-[60px] font-bold`}>
        <span className="word">Hi,</span>{' '}
        <span className="word">I'm</span>{' '}
        <span className="word text-[#0f69b7]">Arnav</span>{' '}
        <span className="word text-[#0f69b7]">Hemdan</span>
      </h1>
<p className={`ml3 mt-2 text-white-100 text-[16px] sm:text-[20px]`}>
  I am a Full Stack Web Developer,<br/>
  Building interfaces and web applications
</p>

    </div>
      </div>

    <AvatarCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
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
