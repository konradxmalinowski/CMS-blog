import { Context } from './Context';
import type { Article } from '../components/Articles';
import {
  checkIfIsLoggedIn,
  fetchArticles as fetchArticlesFn,
  type resultCheckType,
} from '../http.ts';
import { useEffect, useState } from 'react';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [name, setName] = useState<string>('');

  const fetchArticles = async () => {
    const articles = await fetchArticlesFn();

    if (!articles) {
      console.log('Failed to fetch articles');
      return;
    }

    setArticles(articles);
  };

  const check = async () => {
    const result: resultCheckType = await checkIfIsLoggedIn();
    if (result?.success) {
      setName(result.name ?? '');
    }
  };

  useEffect(() => {
    fetchArticles();
    check();
  }, []);

  useEffect(() => {}, [name]);

  const ctx = {
    articles,
    name,
    setName,
    fetchArticles,
  };
  return <Context value={ctx}>{children}</Context>;
};

export default ContextProvider;
