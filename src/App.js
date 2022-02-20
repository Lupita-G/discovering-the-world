
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Lifestyle from "./components/pages/Lifestyle";
import Business from "./components/pages/Business";
import Food from "./components/pages/Food";
import Travel from "./components/pages/Travel";
import Work from "./components/pages/Work";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="App">

      <BrowserRouter >
      <>
      <Navbar />
        <Routes>
          <Route path="/All" element={<Home/>} />
          <Route path="/lifestyle" element={<Lifestyle/>} />
          <Route path="/business" element={<Business/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/travel" element={<Travel/>} />
          <Route path="/work" element={<Work/>} />
          </Routes>
      </>
      </BrowserRouter>
    </div>
  );
}

export default App;
