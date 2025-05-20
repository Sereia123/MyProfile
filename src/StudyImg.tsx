import { useState, useRef, useEffect } from 'react';
import UI1 from './img/Check_ui1.png';
import UI2 from './img/Check_ui2.png';
import Monsakun from './img/Monsakun_ui.png';
import './App.css'


const StudyImg = () => {

    const images = [UI1, UI2, Monsakun]; 
    // const caption = ["モンサクン・チェックUI_1", "モンサクン・チェックUI_2", "モンサクンUI"]
    const [currentSlide, setCurrentSlide] = useState(0);
    const ulRef = useRef<HTMLUListElement>(null);  

    useEffect(() => {
      if (ulRef.current) {
        const slideWidth = ulRef.current.children[0].getBoundingClientRect().width;
        ulRef.current.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
      }
    }, [currentSlide]);

    const handlePrev = () => {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
      setCurrentSlide((prev) => Math.min(prev + 1, images.length - 1));
    };
  return (
    <div className="w-[400px] overflow-hidden  mx-auto box-border relative">
      <ul ref={ulRef} className="list-none m-0 p-0 flex items-center transition-transform duration-500 ease-in-out">
        {images.map((src, index) => (
          <li key={index} className='min-w-full'>
            <div className='text-center mt-2'>
              {/* {caption[currentSlide]} */}
            </div>
            <img src={src} className='w-full object-cover' alt={`スライド${index + 1}`} />
            
          </li>
        ))}
      </ul>

      <button onClick={handlePrev} id="prev" className={`left-0 hover:opacity-40 transition-opacity duration-300 ${currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`} disabled={currentSlide === 0}>&laquo;</button>
      <button onClick={handleNext} id="next" className={`right-0 hover:opacity-40 transition-opacity duration-300 ${currentSlide === images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`} disabled={currentSlide === images.length - 1}>&raquo;</button>
    </div>
  );
};

export default StudyImg;