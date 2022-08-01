import React from 'react'
import "../css/main.css"

const BtnChange = (props) => {

    function btnClick() {
    props.setSlider(!props.slider);
    
    props.btn === "slider" ? (
        props.setBtn("mosaic")
    ) : (
        props.setBtn("slider")
    ) 
    
  }
  return (
    <div className='btnChange' onClick={() => btnClick()}>
        {
            props.btn === "slider" ? <div className="mosaicBtn"><div></div><div></div><div></div><div></div></div> : <div className="sliderBtn"><div className='block'></div><div></div><div></div></div>
        }
    </div>
  )
}

export default BtnChange