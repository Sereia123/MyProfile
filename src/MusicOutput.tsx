import React from 'react';
import bgm1 from './sound/BGMsample1_mp3.mp3';
import soundCloud from './img/Stack Logo E5c47e.png'

const MusicOutput = () => {
  return (
    <div>
      <p className='font-caveat mt-4 font-bold text-left max-sm:-translate-x-[50px]'>～制作物～</p>

      <div className='mt-4 font-caveat flex max-sm:block text-center max-sm:[400px]'>
        <audio controls>
          <source src={bgm1} type="audio/mpeg" />
        </audio>

        <a 
          href="https://soundcloud.com/user-942020842" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={soundCloud} className='mt-4 w-[200px] max-sm:mx-auto text-center' alt="クリックで画像ページへ" />
          <p className='mt-2 font-bold'>～Click to go to My Page～</p>
        </a>
    
        
      </div>
    </div>
    
    
  )
}

export default MusicOutput;