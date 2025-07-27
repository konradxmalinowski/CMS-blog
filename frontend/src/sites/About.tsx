import AboutItems from '../components/AboutItems';
import Community from '../components/Community';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

import { useEffect } from 'react';

const heading = 'About TechBlog';
const content =
  'Your go-to destination for the latest in technology, programming, and software development.';

const About = () => {
  useEffect(() => {
    window.document.title = 'Blog | About';
  }, []);

  return (
    <>
      <Header />
      <Hero heading={heading} content={content} />
      <AboutItems />
      <Community />
      <Footer />
    </>
  );
};

export default About;
