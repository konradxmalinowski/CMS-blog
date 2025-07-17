import { useContext } from 'react';
import Article from './Article';
import { Context } from '../store/Context';

export type Article = {
  id: string;
  categories: string;
  title: string;
  preview: string;
  author: string;
  date: string;
  timeLong: string;
  content: string;
};

const Articles = () => {
  const { articles: ARTICLES } = useContext(Context);

  return (
    <div className="w-full flex justify-center gap-6 items-center content-center flex-wrap my-15 px-11">
      {ARTICLES.map((article: Article) => (
        <Article
          key={article.id}
          id={article.id}
          categories={article.categories}
          title={article.title}
          preview={article.preview}
          author={article.author}
          date={article.date}
          timeLong={article.timeLong}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default Articles;
