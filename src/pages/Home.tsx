import React from 'react';
import ReactHelmet from 'react-helmet-async';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Benefits from '../components/Benefits';
import ForWhom from '../components/ForWhom';
import AboutMe from '../components/AboutMe';
import CTA from '../components/CTA';

export async function onBeforeRender() {
  return {
    pageContext: {
      title: 'KHCustomWeb | Betaalbare websites voor ondernemers',
      description: 'KHCustomWeb biedt betaalbare websites voor ondernemers in Limburg en Nederland. Gratis demo eerst zien, dan pas betalen. Snel en zonder gedoe.'
    }
  };
}

const Home: React.FC = () => {
  return (
    <>
      <ReactHelmet.Helmet>
        <title>KHCustomWeb | Betaalbare websites voor ondernemers</title>
        <meta name="description" content="KHCustomWeb biedt betaalbare websites voor ondernemers in Limburg en Nederland. Gratis demo eerst zien, dan pas betalen. Snel en zonder gedoe." />
        <link rel="canonical" href="https://www.khcustomweb.com/" />
      </ReactHelmet.Helmet>
      <div>
        <Hero />
        <Steps />
        <Benefits />
        <ForWhom />
        <AboutMe />
        <CTA />
      </div>
    </>
  );
};

export default Home;