import React from 'react';
import pic1 from './img/illust_1.png'
import pic2 from './img/illust_2.png'
import pic3 from './img/illust_3.png'
import pic4 from './img/illust_4.png'
import pic5 from './img/illust_5.png'
import pic6 from './img/illust_6.png'
import pic7 from './img/illust_7.png'
import pic8 from './img/illust_8.png'

const imageData = [
  { src: pic1, alt: "イラスト１" },
  { src: pic2, alt: "イラスト２" },
  { src: pic3, alt: "イラスト３" },
  { src: pic4, alt: "イラスト４" },
  { src: pic5, alt: "イラスト５" },
  { src: pic6, alt: "イラスト６" },
  { src: pic7, alt: "イラスト７" },
  { src: pic8, alt: "イラスト８" },
];

const IllustOutput = () => {
  return (
    <div>
      <p className='font-caveat mt-4 font-bold text-left'>～制作物～</p>

      <div className='mx-[10%] mt-4 w-[500px] overflow-x-auto whitespace-nowrap p-4  max-sm:w-[400px]' >

        {imageData.map((item, index) => (
          <div
            key={index}
            className='inline-block  m-[10px] '
          >
            <img
              src={item.src}
              className='h-[200px]  object-cover'
              alt={item.alt}
            />
          </div>
        ))}

      </div>
    </div>
  )
}

export default IllustOutput;