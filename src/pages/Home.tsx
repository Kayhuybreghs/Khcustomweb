import React from 'react';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Benefits from '../components/Benefits';
import ForWhom from '../components/ForWhom';
import AboutMe from '../components/AboutMe';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  React.useEffect(() => {
    document.title = "KHCustomWeb | Betaalbare websites voor ondernemers";
  }, []);

  return (
    <div>
      <Hero />
      <Steps />
      <Benefits />
      <ForWhom />
      <AboutMe />
      <CTA />
    </div>
  );
};

export default Home;