import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "../css/slider.css";

const Slider = () => {
  
  let [sizeSlide, setSizeSlide] = useState(0)

  function slide(e) {
      
      const slider = document.querySelector(".slider ul");
      const liWidth = document.querySelector("li").offsetWidth;
      
      console.log(sizeSlide);
      
      if (e.target.classList.contains("right")) {
          setSizeSlide(sizeSlide -= liWidth);
          slider.style.transform = `translateX(${sizeSlide}px)`;
      } else {
          setSizeSlide(sizeSlide += liWidth); 
          slider.style.transform = `translateX(${sizeSlide}px)`;
      }
      
  }

  return (
    <div className='slider'>
      <FontAwesomeIcon className='left' onClick={(e) => slide(e)}  icon={faArrowLeft} />
      
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
      <FontAwesomeIcon className='right' onClick={(e) => slide(e) } icon={faArrowRight} />
    </div>
  )
}

export default Slider