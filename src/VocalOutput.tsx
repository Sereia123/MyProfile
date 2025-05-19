import React from 'react';

const VocalOutput = () => {
  return (
    <div className='translate-x-[50px]'>
      <p className='font-caveat mt-4 font-bold text-left'>～制作物～</p>

       <div className='ml-[100px] mt-4 flex items-center flex-col'>
          <iframe
            className='w-[400px] max-sm:w-[300px] h-[220px] max-sm:h-[165px] -translate-x-[100px]'
            src="https://embed.nicovideo.jp/watch/sm44676486"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className='ml-[100px] mt-4'>
          <iframe
            className='w-[400px] max-sm:w-[300px] h-[220px] max-sm:h-[165px]'
            src="https://www.youtube.com/embed/-bNwWrzaMYs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        </div>
    </div>
  )
}

export default VocalOutput;