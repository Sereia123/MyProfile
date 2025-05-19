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
import CD from './img/CDjacket_0.png'

const dotData = [
  { src: dot1, alt: "ドット絵１" },
  { src: dot2, alt: "ドット絵２" },
  { src: dot3, alt: "ドット絵３" },
  { src: dot4, alt: "ドット絵４" },
];

const textData = [
  { src: text1, alt: "教科書１" },
  { src: text2, alt: "教科書２" },
  { src: text3, alt: "教科書３" },
];

const Club = () => {
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
        
          <h3>所属サークル：ゲーム制作同好会(GSD)</h3>
          <a 
            href="https://hu-gsd.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p>ホームページ</p>
          </a>

          <h3>★主な活動</h3>
          <h4>サウンドクリエイター</h4>
          <p>主に、ステージBGMやタイトルBGM、またゲーム内のSEを作成します。</p>
          <p>
            ステージBGM
          </p>
          <audio controls>
            <source src={""} type="audio/mpeg" />
          </audio>
          <p>
            SE
          </p>
          <audio controls>
            <source src={""} type="audio/mpeg" />
          </audio>

          <h4>イラストレーター</h4>
          <p>主に、ゲームで使用されるキャラ絵やステージに配置される物体、背景などを作成します。</p>
          <p>素材例</p>
          <div className='mx-[10%] mt-4 w-[500px] overflow-x-auto whitespace-nowrap p-4  max-sm:w-[400px]'>

            {dotData.map((item, index) => (
              <div
                key={index}
                className='inline-block'
              >
                <img
                  src={item.src}
                  className='w-[150px] object-cover'
                  alt={item.alt}
                />
              </div>
            ))}
            
          </div>

          <h3>★その他</h3>
          <h4>コミックマーケットにおけるCD制作</h4>
          <p>サークルとして久しぶりとなるコミックマーケット参加において、サウンドクリエイターたちが作曲したBGMを収録したCDを作成しました。自分が行った範囲では、企画の立案・プロジェクトの管理・BGMの作曲依頼・ジャケット作成やCDへの書き込みとなります。</p>
          <div className=''>
            <img src={CD} width="200px" alt='コミケのCD'/>
          </div>

          <h4>新人サウンドクリエイターのための教科書制作</h4>
          <p>作曲、また音楽に触れてこなかった方向けの指導書として、「作曲のはじめ」を作成しました。</p>


          <div className='overflow-x-auto whitespace-nowrap p-4'>
            {textData.map((item, index) => (
              <div
                key={index}
                className='inline-block display: "inline-block", width: "200px", height: "100px", marginRight: "120px", background: "#ccc"'
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