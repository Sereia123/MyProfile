import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Music from './img/ピアノアイコン.png';
import Illust from './img/パレットのアイコン1.png';
import Movie from './img/フィルムのアイコン素材3.png';
import Vocal from './img/マイクのアイコン素材 その5.png';
import MusicOutput from './MusicOutput';
import IllustOutput from './IllustOutput';
import MovieOutput from './MovieOutput';
import VocalOutput from './VocalOutput';

const hobbies = [
  {
    label: '作曲活動',
    img: Music,
    alt: '作曲アイコン',
    output: <MusicOutput/>,
  },
  {
    label: 'イラスト制作',
    img: Illust,
    alt: 'イラストアイコン',
    output: <IllustOutput/>,
  },
  {
    label: '動画制作',
    img: Movie,
    alt: '動画アイコン',
    output: <MovieOutput/>,
  },
  {
    label: 'ボカロ制作',
    img: Vocal,
    alt: 'ボカロアイコン',
    output: <VocalOutput/>,
  },
];

const Hobby = () => {


  const [ref, inView] = useInView({
    threshold: .8,
    triggerOnce: true,
  })

  const [showUnderline, setShowUnderline] = useState<boolean>(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const selectedHobby = openIndex !== null ? hobbies[openIndex] : null;

  return (
    <section className='container'>
      <motion.div //アニメーション
        ref={ref}
        initial={{opacity: 0, x: 40}}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-left ml-[3%]'>
          <h2 className={`text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animateL underline-animateL-active' : 'underline-animateL'}`}>
           趣味
          </h2>
        </div>

        <div className='max-w-[500px] w-full mx-auto box-border flex justify-between mt-4 '>

          {hobbies.map((hobby, index) => (
            <div key={hobby.label} className="element">
              <p className={`mb-2 font-caveat ${openIndex === index ? 'opacity-50' : ''}`}>{hobby.label}</p>
              <img
                src={hobby.img}
                alt={hobby.alt}
                width="100%"
                onClick={() => handleClick(index)}
                className={`cursor-pointer transition-transform hover:scale-105 ${openIndex === index ? 'opacity-50' : ''}`}
              />
            </div>
          ))}
        </div>
        
        <div className='-translate-y-[90px]'>
          <AnimatePresence>
            {selectedHobby && (
              
              <motion.div 
                key="selectedHobby.label"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: .8 }}
                className="max-w-[500px] flex justify-center max-sm:w-[400px] "
              >
                {selectedHobby.output}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
         
      </motion.div>
    </section>
  )
}

export default Hobby;