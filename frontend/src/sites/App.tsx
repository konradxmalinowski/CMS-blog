import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const heading = 'Latest Tech Articles';
const content =
  'Stay updated with the latest trends, tutorials, and insights in technology and software development.';

const App = () => {
  return (
    <>
      <Header />
      <Hero heading={heading} content={content} />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
