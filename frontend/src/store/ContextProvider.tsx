import { Context } from './Context';
import type { Article } from '../components/Articles';
import { fetchArticles as fetchArticlesFn } from '../http.ts';
import { useEffect, useState } from 'react';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const articles = await fetchArticlesFn();

    if (!articles) {
      console.log('Failed to fetch articles');
      return;
    }

    setArticles(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const ctx = {
    articles,
    fetchArticles,
  };
  return <Context value={ctx}>{children}</Context>;
};

export default ContextProvider;
