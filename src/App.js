import { useState } from "react";
import Mosaic from "./components/Mosaic";
import Slider from "./components/Slider";
import BtnChange from "./components/BtnChange";
import "./css/main.css"

function App() {

  const [slider, setSlider] = useState(true);
  const [btnContent, setBtnContent] = useState("slider"); 

  return (
    <div className="App">
        <BtnChange btn={btnContent} setBtn={setBtnContent} slider={slider} setSlider={setSlider} ></BtnChange>
        {
          slider === true ? <Slider></Slider> : <Mosaic></Mosaic>
        }
    </div>
  );

}

export default App;
