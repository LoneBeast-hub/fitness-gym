import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Choice from "./Components/Choice";
import Moment from "./Components/Moment";
import Pricing from "./Components/Pricing";
import Trainer from "./Components/Trainer";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HashLoader
            color={"#ff6600"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index path="/" Component={Navbar} />
            <Route exact path="/Header" Components={Header} />
            <Route exact path="/About" Component={About} />
            <Route exact path="/Choice" Component={Choice} />
          
            <Route exact path="/Services" Component={Services} />
       
            <Route exact path="/Moment" Component={Moment}  />
            <Route exact path="/Pricing" Component={Pricing} />
            <Route exact path="/Trainer" Component={Trainer} />
            <Route exact path="/Testimonial" Component={Testimonial} />
            <Route exact path="/Contact" Component={Contact} />
            <Route exact path="/Footer" Component={Footer} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
