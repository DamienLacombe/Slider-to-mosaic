import { useState } from "react";
import Mosaic from "./components/Mosaic";
import Slider from "./components/Slider";

function App() {

  const [slider, setSlider] = useState(true);
  const [btnContent, setBtnContent] = useState("Mosaic"); 

  function btnClick() {
    setSlider(!slider);
    btnContent === "Slider" ? setBtnContent("Mosaic") : setBtnContent("Slider");
  }

  return (
    <div className="App">
        <button onClick={() => btnClick() }>{btnContent}</button>
        {
          slider === true ? <Slider></Slider> : <Mosaic></Mosaic>
        }
    </div>
  );

}

export default App;
