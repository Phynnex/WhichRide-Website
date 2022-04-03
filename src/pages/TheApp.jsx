import React from 'react';
import About from '../components/About/About';
import Hero  from '../components/Hero/Hero';
import SignUp from '../components/SignUp/SignUp';
import Why from './../components/Why/Why';
import Footer from '../components/Footer/Footer';

const TheApp = () => {
  return (
    <>
      <Hero />
      <About />
      <Why />
      <SignUp/>
      <Footer />
    </>
  );
}



export default TheApp;