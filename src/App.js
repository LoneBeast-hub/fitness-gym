import React from "react";
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Choice from "./Components/Choice";
import Moment from "./Components/Moment";
import Pricing from "./Components/Pricing"
import Trainer  from "./Components/Trainer";
import Testimonial from "./Components/Testimonial"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Choice />
      <Services />
      <Moment />
      <Pricing />
      <Trainer/>
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
