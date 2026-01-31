import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Expertise from '../components/Expertise';
import Works from '../components/Works';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Expertise />
      {/* <Works /> */}
      <Footer />
    </>
  );
};

export default Home;
