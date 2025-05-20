import React from 'react';
import bgm1 from './sound/BGMsample2_wav.wav';
import bgm2 from './sound/BGMsample3_wav.wav';
import soundCloud from './img/Stack Logo E5c47e.png'

const MusicOutput = () => {
  return (
    <div>
      <p className='font-caveat mt-4 font-bold text-left max-sm:-translate-x-[50px]'>～制作物～</p>

      <div className='mt-6 font-caveat flex max-sm:block text-center max-sm:[400px] gap-5 ml-10 max-sm:ml-0'>

        <div className='flex flex-col'>
          <audio controls className='mb-8'>
            <source src={bgm1} type="audio/mpeg"/>
          </audio>
          <audio controls>
            <source src={bgm2} type="audio/mpeg" />
          </audio>
        </div>
        

        <a 
          href="https://soundcloud.com/user-942020842" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={soundCloud} className='mt-4 w-[400px] max-sm:mx-auto max-sm:w-[200px] text-center' alt="クリックで画像ページへ" />
          <p className='mt-2 font-bold'>↑Click to go to My Page</p>
        </a>
    
        
      </div>
    </div>
    
    
  )
}

export default MusicOutput;