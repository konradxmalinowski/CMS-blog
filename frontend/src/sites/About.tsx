import ArticleWrapper from '../components/ArticleWrapper';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import Category from '../components/Category';
import { useEffect } from 'react';

const heading = 'About TechBlog';
const content =
  'Your go-to destination for the latest in technology, programming, and software development.';

const TECHNOLOGIES = [
  'React',
  'JS',
  'TS',
  'HTML',
  'CSS',
  'SASS',
  'TailwindCSS',
  'Node',
  'PHP',
  'SQL',
  'MySQL',
  'Python',
  'Java',
];

const About = () => {
  useEffect(() => {
    window.document.title = 'Blog | About';
  }, []);

  return (
    <>
      <Header />
      <Hero heading={heading} content={content} />
      <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-6 my-15 px-11">
        <ArticleWrapper className="max-w-28 lg:justify-self-end justify-self-center">
          <h1 className="text-xl font-medium">Our Mission</h1>
          <p className="text-gray-600 my-4">
            We believe in making technology accessible to everyone. Our mission
            is to provide high-quality, practical content that helps developers
            at all levels grow their skills and stay current with industry
            trends.
          </p>
          <p className="text-gray-600">
            From beginner tutorials to advanced architectural concepts, we cover
            the full spectrum of modern software development.
          </p>
        </ArticleWrapper>
        <ArticleWrapper className="max-w-28 lg:justify-self-start justify-self-center px-16">
          <h1 className="text-xl font-medium">What We Cover</h1>
          <ul className="list-disc text-gray-600 mt-4">
            <li>Web Development</li>
            <li>Frameworks</li>
            <li>Hosting</li>
            <li>Design</li>
            <li>Help with websites</li>
          </ul>
        </ArticleWrapper>
        <ArticleWrapper className="max-w-28 lg:justify-self-end justify-self-center flex flex-col justify-center gap-y-4">
          <h1 className="text-xl font-medium mb-4">Technologies we love</h1>
          <div className="w-full flex justify-center flex-wrap items-center gap-3.5">
            {TECHNOLOGIES.map((technology, idx) => (
              <Category key={idx}>{technology}</Category>
            ))}
          </div>
        </ArticleWrapper>
        <ArticleWrapper className="max-w-28 lg:justify-self-start justify-self-center">
          <h1 className="text-xl font-medium mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            Have a question, suggestion, or want to contribute? We&apos;d love
            to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mt-3.5">
            <a href="mailto:malinowski.konrad45@gmail.com">
              <Button
                variant="light"
                className="flex justify-center items-center gap-1.5"
              >
                <img src={emailIcon} alt="email icon" />
                malinowski.konrad45@gmail.com
              </Button>
            </a>
            <a href="https://github.com/konradxmalinowski">
              <Button
                variant="light"
                className="flex justify-center items-center gap-1.5"
              >
                <img src={githubIcon} alt="github icon" />
                konradxmalinowski
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/konradxmalinowski">
              <Button
                variant="light"
                className="flex justify-center items-center gap-1.5"
              >
                Konrad Malinowski
              </Button>
            </a>
          </div>
        </ArticleWrapper>
      </div>
      <Footer />
    </>
  );
};

export default About;
