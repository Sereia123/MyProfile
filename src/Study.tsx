import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion";
import './App.css';

const Study = () => {

  const [showUnderline, setShowUnderline] = useState<boolean>(false)

  return (
    <section className='mt-8 ml-auto w-[640px] max-sm:w-[100%] '>
      <motion.div //アニメーション
        initial={{opacity: 0, y: 40}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-right mr-[3%]'>
          <h2 className={`text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animate underline-animate-active' : 'underline-animate'}`}>
            研究概要<span>{" "}</span>

          </h2>
        </div>
        

        <div>
          <p className='mt-4 indent-4'>
            現実問題を数式で解決する数学的モデリングでは、数式を作ることのできる問題を作成することが重要視されており、先行研究となる「モンサクン」ではその作成要件を作問学習により学習者に学習させるシステムとなっている。本研究では、「モンサクン」において、学習者が自己説明により自身の作問演習が正しいかどうかを自身で判断することのできるシステム「モンサクン・チェック」の開発を行った。
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Study;