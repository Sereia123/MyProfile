import React from 'react';
import movie from './video/test1.mp4';

const MovieOutput = () => {
  return (
    <div>
      <p className='font-caveat mt-4 font-bold text-left'>～制作物～</p>

       <div className='ml-[100px] mt-4'>
          <video className='w-[500px] max-sm:[300px] '  controls>
            <source src={""} type="video/mp4" />
          </video>
        </div>

        
    </div>
  )
}

export default MovieOutput;