import React from 'react'
import Header from './components/component/header/Header';
import Nav from './components/component/nav/Nav';
import About from './components/component/about/About';
import Experience from './components/component/experience/Experience';
import Services from './components/component/services/Services';
import Portfolio from './components/component/portfolio/Portfolio';
import Testimonials from './components/component/testimonials/Testimonials';
import Contact from './components/component/contact/Contact';
import Footer from './components/component/footer/Footer';

const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App