import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import text1 from './img/text1.png';
import text2 from './img/text2.png';
import text3 from './img/text3.png';
import dot1 from './img/dot/主人公(喜び).png'
import dot2 from './img/dot/スライム(ウィンク).png'
import dot3 from './img/dot/転移陣.png'
import dot4 from './img/dot/石盤.png'
import dot5 from './img/dot/クリスタル.png'
import dot6 from './img/dot/タイトル画面.png'
import dot7 from './img/dot/背景.png'
import dot8 from './img/dot/主人公(立ち絵0).png'
import dot9 from './img/dot/主人公(立ち絵1).png'
import dot10 from './img/dot/主人公(立ち絵2).png'
import CD from './img/CDjacket_0.png'
import bgm from './sound/BGMsample1_mp3.mp3'

const dotData = [
  { src: dot1, alt: "ドット絵１" },
  { src: dot2, alt: "ドット絵２" },
  { src: dot3, alt: "ドット絵３" },
  { src: dot4, alt: "ドット絵４" },
  { src: dot5, alt: "ドット絵５" },
  { src: dot6, alt: "ドット絵６" },
  { src: dot7, alt: "ドット絵７" },
  { src: dot8, alt: "ドット絵８" },
  { src: dot9, alt: "ドット絵９" },
  { src: dot10, alt: "ドット絵１０" },
];

const textData = [
  { src: text1, alt: "教科書１" },
  { src: text3, alt: "教科書２" },
  { src: text2, alt: "教科書３" },
];

const Club = () => {
  const [ref, inView] = useInView({
      threshold: .2,
      triggerOnce: true,
    })
  
  const [showUnderline, setShowUnderline] = useState<boolean>(false);

  return (
    <section className='ml-auto container bg-white/70'>
      <motion.div //アニメーション
        ref={ref}
        initial={{opacity: 0, x: -40}}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{duration: 1.3, delay: .8}}
        onAnimationComplete={() => setShowUnderline(true)}
      >
        <div className='text-right'>
          <h2 className={`mr-[3%] text-2xl font-bold font-sans relative inline-block ${showUnderline ? 'underline-animateR underline-animateR-active' : 'underline-animateR'}`}>
            サークル活動

          </h2>
         
          <a 
            href="https://hu-gsd.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline visited:text-purple-800"
          >
            <p className='mt-4 text-xl font-bold text-left'>ゲーム制作同好会(GSD)</p>
          </a>
          
          <h3 className='mt-4 text-lg text-left'>★主な活動</h3>

          <div className='bg-red-500/50 rounded-2xl mr-auto w-[450px] mt-4 p-4'>
            <h4 className='bg-white text-red-400 text-left w-[200px] font-caveat font-bold text-xl rounded-lg'>サウンドクリエイター</h4>
            <p className='text-white mt-2 font-bold'>ステージBGMやタイトルBGM、ゲーム内SEの制作。</p>
            <p className='text-white mr-4 mt-4'>
              素材例
            </p>
            <div className='mx-[14%] my-4'>
              <audio controls>
              <source src={bgm} type="audio/mpeg" />
            </audio>
            </div>
            
            
          </div>


          <div className='bg-blue-500/50 rounded-2xl ml-auto w-[450px] mt-6 p-4'>
            <h4 className='bg-white text-blue-400 text-right w-[160px] font-caveat font-bold ml-auto text-xl rounded-lg'>イラストレーター</h4>
            <p className='text-white mt-2 font-bold text-left'>キャラ絵やステージに配置される物体、背景などの制作。</p>
            <p className='text-white mr-4 mt-4'>
              素材例
            </p>
            <div className='mt-4 w-full overflow-x-auto whitespace-nowrap p-4  '>

              {dotData.map((item, index) => (
                <div
                  key={index}
                  className='inline-block'
                >
                  <img
                    src={item.src}
                    className='h-[150px] object-cover mr-5'
                    alt={item.alt}
                  />
                </div>
              ))}
              
            </div>
          </div>
          
          <p className='text-center ml-6 mt-6 bg-yellow-400/70  font-bold p-2 rounded-lg'>
            上記の素材を使用したゲームはこちら
            <br/>→
            <a 
              href="https://unityroom.com/games/akaneeiga#google_vignette"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 underline visited:text-purple-800"
            >
              あかねが征く！映画撮影・冒険譚！
            </a>
          </p>
         
          
          

          <h3 className='mt-4 text-lg text-right'>★その他</h3>
          <h4 className='font-bold mr-4 mt-2'>コミックマーケットにおけるCD制作</h4>
          <div className='mt-6 ml-[20%]'>
            <img src={CD} width="200px" alt='コミケのCD'/>
          </div>

          <h4 className='font-bold ml-4 mt-6 text-left'>新人サウンドクリエイターのための教科書制作</h4>


          <div className='overflow-x-auto whitespace-nowrap p-4'>
            {textData.map((item, index) => (
              <div
                key={index}
                className='inline-block mr-[60px]'
              >
                <img
                  src={item.src}
                  className='w-[300px] h-[410px] object-cover'
                  alt={item.alt}
                />
              </div>
            ))}
          </div>

        </div> 

        
      </motion.div>
    </section>
  )
}

export default Club;