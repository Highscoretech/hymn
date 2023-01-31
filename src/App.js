import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./Pages/Search";
import One from "./Pages/One";
import Two from "./Pages/Two";
import Three from "./Pages/Three";
import Four from "./Pages/Four";
import bible from "./images/preloader.svg"
import proclaim from "./images/prockain.svg"
import { useState } from "react";
import Five from "./Pages/five";
import Six from "./Pages/six";
import Seven from "./Pages/Seven";
import Eight from "./Pages/Eight";
import Ten from "./Pages/Ten";
import Nine from "./Pages/Nine";
import Eleven from "./Pages/eleven";
import Twelve from "./Pages/Twelve";
import Thirteen from "./Pages/Thirteen";
import Fourteen from "./Pages/Fourteen";
import Fifteen from "./Pages/Fifteen";
import Sixteen from "./Pages/Sixteen";
import Seventeen from "./Pages/Seventeen";
import Eighteen from "./Pages/Eighteen";
import Nineteen from "./Pages/Nineteen";
import Twenty from "./Pages/Twenty";


function App() {
  const [showbible, setShowbible] = useState(true)
  const [showproclaim, setShowproclaim] = useState(false)


setTimeout(()=>{
  setShowproclaim(false)
  setShowbible(false)

  setTimeout(()=>{
    setShowbible(false)
    setShowproclaim(true)
  },2000)
},2000)


  return (
    <div className="App">

      { showbible &&  <div className="first-img-load">
          <img src={bible} alt="ike" />
      </div> }
      
      { showproclaim &&  <div className="first-img-load">
            <img src={proclaim} alt="ike" />
      </div> }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/awaking-chorus" element={<One />} />
          <Route path="/be-stil" element={<Two />} />
          <Route path="/it-enough" element={<Three />} />
          <Route path="/heard-voice" element={<Four />} />
          <Route path="/took-me" element={<Five />} />
          <Route path="/thywill-bedone" element={<Six />} />
          <Route path="/mighty-fortress" element={<Seven />} />
          <Route path="/awake" element={<Eight />} />
          <Route path="/awake-sing" element={<Nine />} />
          <Route path="/there-god" element={<Ten />} />
          <Route path="/by-and-by" element={<Eleven />} />
          <Route path="/who-sleep" element={<Twelve />} />
          <Route path="/god-still" element={<Thirteen />} />
          <Route path="/my-friend" element={<Fourteen />} />
          <Route path="/god-posibility" element={<Fifteen />} />
          <Route path="/blessing-prayer" element={<Sixteen />} />
          <Route path="/beautiful-prayer" element={<Seventeen />} />
          <Route path="/assurance-jesus" element={<Eighteen />} />
          <Route path="/god-immortal" element={<Nineteen />} />
          <Route path="/rock-me-sleep" element={<Twenty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
