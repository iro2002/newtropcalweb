import React from "react";
import Header from "./src/components/Header";

import Navbar from "./src/components/Navbar";
import Gallery from "./src/components/Gallery";
import AIAssistant from "./src/components/AIAssistant";
import Hero from "./src/components/Hero";
import Artist from "./src/components/Artist";
import Portfolio from "./src/components/Portfolio";
import Album from "./src/components/Album";
import Price from "./src/components/Price";
import Footer from "./src/components/Footer";



const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Gallery />
     
      <AIAssistant />
      <Artist />
      <Album />
      <Portfolio />
     
      <Price />
      <Footer />


    </div>
  );
};

export default App;
