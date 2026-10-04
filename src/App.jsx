import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Programs from './components/Programs.jsx';
import HowWeWork from './components/HowWeWork.jsx';
import Sectors from './components/Sectors.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Programs />
        <HowWeWork />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
