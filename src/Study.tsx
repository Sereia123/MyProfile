import React from 'react';
import { useState } from 'react';
import {motion} from "framer-motion";
import Monsakun from './img/Monsakun_ui.png';
import Check1 from './img/Check_1.png';
import Check2 from './img/Check_2.png';


const Study = () => {

  const [showUnderline, setShowUnderline] = useState<boolean>(false)

  return (
    <section className='ml-auto container bg-white/70'>
      <motion.div //アニメーション
        initial={{opacity: 0, x: -40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-right mr-[3%]'>
          <h2 className={`text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animateR underline-animateR-active' : 'underline-animateR'}`}>
            研究概要

          </h2>
        </div>
        

        <div>
          <p className='mt-4 indent-4'>
            現実問題を数式で解決する数学的モデリングでは、数式を作ることのできる問題を作成することが重要視されており、先行研究となる「モンサクン」ではその作成要件を作問学習により学習者に学習させるシステムとなっている。しかし、「モンサクン」における学習では、学習者自身が作成要件を見つけ出す発見的学習を行う場となっていることから、難しいと感じる学習者も存在する。本研究では、そのような学習者に対しての支援として、モンサクンを行う際にどのようなことを考えながら行えばいいかに対する道しるべを学習することのできるシステム「モンサクン・チェック」の設計・開発を行っている。
          </p>
        </div>

        <div className='flex flex-col mt-5'>
          <>
            <img src={Monsakun} alt="モンサクンUI" className='w-[400px] max-sm:[300px]' />
            <p className='mt-2 font-bold ml-[145px] mb-4'>図：モンサクン</p>
          </>
          
          <>
            <img src={Check1} alt="モンサクンUI" className='w-[400px] max-sm:[300px] ml-auto ' />
            <p className='mt-2 font-bold ml-[350px] mb-4 '>図：モンサクン・チェック_修正</p>

            <img src={Check2} alt="モンサクンUI" className='w-[400px] max-sm:[300px] ' />
            <p className='mt-2 font-bold ml-[120px] mb-4'>図：モンサクン・チェック_判定</p>

            <p className='mt-2 ml-[220px] font-bold '>
              モンサクン・チェックはこちら→
              <a href="https://monsakun-check.vercel.app/" target="_blank" rel="noopener noreferrer " className="text-blue-500 underline visited:text-purple-800">
                モンサクン・チェック(開発中)
              </a>
            </p>
          </>
          
        </div>
        
      </motion.div>
    </section>
  )
}

export default Study;