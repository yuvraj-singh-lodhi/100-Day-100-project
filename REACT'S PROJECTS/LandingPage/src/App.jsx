import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    let heroData = [
        {text1: "Drive into" , text2: "What you love"},
        {text1: "Indulge" , text2: "Your passion"},
        {text1: "Give in to " , text2: "Your Passion"},
    ]
const [heroCount, setHeroCount] = useState(3);
const[playStatus, setPlayStatus] = useState(false);
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar/>
    </div>
  )
}

export default App