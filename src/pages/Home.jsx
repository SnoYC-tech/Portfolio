import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Expertise from '../components/Expertise';
import WhyChoose from '../components/WhyChoose';
import Works from '../components/Works';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Expertise />
      <WhyChoose />
      {/* <Works /> */}
      <Footer />
    </>
  );
};

export default Home;