import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Output = () => {
  const [ref, inView] = useInView({
      threshold: .8,
      triggerOnce: true,
    })
  
    const [showUnderline, setShowUnderline] = useState<boolean>(false);

  return (
    <section className='ml-auto container'>
      <motion.div //アニメーション
        ref={ref}
        initial={{opacity: 0, x: -40}}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-right mr-[3%]'>
          <h2 className={`text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animateR underline-animateR-active' : 'underline-animateR'}`}>
            サークル活動

          </h2>
        
          

          <div className='flex justify-between mx-[10%]'></div>
        </div>

      </motion.div>
    </section>
  )
}

export default Output;