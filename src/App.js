import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./User_panel/components/Home/Home";
import Navbar from "./User_panel/components/Navbar/Navbar";
import { Footer } from "./User_panel/components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
