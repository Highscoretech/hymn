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
import Seven from "./Pages/Nine";
import Eight from "./Pages/Eight";
import Ten from "./Pages/Ten";
import Nine from "./Pages/Nine";
import Eleven from "./Pages/eleven";


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
