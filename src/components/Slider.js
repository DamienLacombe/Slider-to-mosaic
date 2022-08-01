import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../css/slider.css";

const Slider = () => {
  
  let [sizeSlide, setSizeSlide] = useState(0)

  useEffect(() => {
    document.querySelector(".left").style.display = "none"  
  },[])
  function slide(e) {
      
      const slider = document.querySelector(".slider ul");
      const liWidth = document.querySelector("li").offsetWidth;
           
      if (e.currentTarget.classList.contains("right")) {
         
          setSizeSlide(sizeSlide -= liWidth);
          slider.style.transform = `translateX(${sizeSlide}px)`; 
          document.querySelector(".left").style.display = "block" 
          
          if (sizeSlide - (liWidth * 4) <= (slider.offsetWidth ) * -1) {
            e.currentTarget.style.display = "none"
          }
      } else {
        
        setSizeSlide(sizeSlide += liWidth); 
        slider.style.transform = `translateX(${sizeSlide}px)`;
        document.querySelector(".right").style.display = "block"
        
        if (sizeSlide === 0) {
              e.currentTarget.style.display = "none"
        }
      }
  }

  return (
    <div className='slider'>
      <button className='left' onClick={(e) => slide(e)}><FontAwesomeIcon icon={faArrowLeft} /></button>
      
      <ul>
        <li>
          <img src="https://via.placeholder.com/150?text=1" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=2" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=3" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=4" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=5" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=6" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=7" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=8" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=9" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=10" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=11" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=12" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=13" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=14" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=15" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=16" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=17" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=18" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=19" alt="" />
        </li>
        <li>
          <img src="https://via.placeholder.com/150?text=20" alt="" />
        </li>
      </ul>
      <button className='right' onClick={(e) => slide(e) }><FontAwesomeIcon icon={faArrowRight} /></button> 
    </div>
  )
}

export default Slider