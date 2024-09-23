import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./User_panel/components/Home/Home";
import Navbar from "./User_panel/components/Navbar/Navbar";
import { gif, loader } from "./User_panel/images/Images"; // Import gif and loader

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Create a new Image object to track when the gif has loaded
    const img = new Image();
    img.src = gif;
    img.onload = () => {
      setIsLoading(false); // Set loading to false when gif is loaded
    };
  }, []);

  return (
    <>
      {isLoading ? ( // Display loader if isLoading is true
        <div style={loaderStyles}>
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

// Styles for the loader container (centered on the screen)
const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "#000", // Set the background color to black
  zIndex: 1000, // Ensure loader is on top
};

export default App;
