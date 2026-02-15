import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AIAssistant from "./components/AIAssistant";
import Hero from "./components/Hero";
import Artist from "./components/Artist";
import Portfolio from "./components/Portfolio";
import Album from "./components/Album";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Gallery />
      <AIAssistant />
      <Artist />
      <Album />

      <Price />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
