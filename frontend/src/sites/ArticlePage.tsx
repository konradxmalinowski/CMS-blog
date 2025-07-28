import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../store/Context';
import Button from '../components/Button';
import type { Article } from '../components/Articles';
import Category from '../components/Category';

import timeIcon from '../assets/time.png';
import personIcon from '../assets/person.png';
import dateIcon from '../assets/date.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ArticlePage = () => {
  const { id } = useParams();
  const { articles } = useContext(Context);

  let article: Article | undefined;
  if (articles) {
    article = articles.find(
      (article: Article) => article.id === id?.toString()
    );
  }

  useEffect(() => {
    if (article) {
      window.document.title = `Blog | ${article.title}`;
    }
  }, [article]);

  return (
    <>
      <Header />
      <div className="min-w-80 max-w-150 border-2 border-gray-300 p-8 rounded-xl">
        <Link to="/">
          <Button variant="light">&lt;- Back to articles</Button>
        </Link>
        {!article && <p>Article with this ID was not found</p>}
        {article && (
          <>
            <div className="flex items-center gap-3 mb-4 mt-6">
              {article.categories.split(',').map((category, idx) => (
                <Category key={idx}>{category}</Category>
              ))}
            </div>
            <h1 className="text-xl font-medium">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 my-4">
              <span>
                <img
                  src={personIcon}
                  alt="person icon"
                  className="inline mr-1.5"
                />
                {article.author}
              </span>
              <span>
                <img src={dateIcon} alt="date icon" className="inline mr-1.5" />
                {article.date}
              </span>
              <span>
                <img src={timeIcon} alt="time icon" className="inline mr-1.5" />
                {article.timeLong}
              </span>
            </div>
            <p>{article.content}</p>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;
