import {motion} from "framer-motion";
import { useState } from 'react';
import musiclearning from './img/musiclearning.png';


const SoundLearning = () => {

  const [showUnderline, setShowUnderline] = useState<boolean>(false)

  return (
    <section className='mr-auto container bg-white/70'>
      <motion.div //アニメーション
        initial={{opacity: 0, x: 40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-left mr-[3%] mb-8'>
          <h2 className={`text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animateL underline-animateL-active' : 'underline-animateL'}`}>
            作曲学習アプリ

          </h2>
        </div>

        
        <a href="https://music-learning.vercel.app/" target="_blank" rel="noopener noreferrer " className="text-blue-500 underline visited:text-purple-800 font-bold">
          作曲学習アプリ(開発中)
        </a>  

        <p className="mt-2">
          ※本システムの対象者としては、ある程度作曲の知識が備わっている人・作曲の教科書を読み進めた人となります。
        </p>

        <div className="mb-8 mt-6">
          <img src={musiclearning} alt="作曲学習アプリ" />
        </div>
        

      </motion.div>
    </section>
  )
}

export default SoundLearning;
