import { createContext } from 'react';
import type { Article } from '../components/Articles';

type ContextType = {
  articles: Article[];
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  fetchArticles: () => void;
};

export const contextPrototype = {
  articles: [
    {
      id: '1',
      categories: '',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      preview:
        'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.',
      author: 'Sarah Johnson',
      date: '15/01/2025',
      timeLong: '5 min read',
      content: '',
    },
  ],
  name: '',
  setName: () => {},
  fetchArticles: () => {},
};

export const Context = createContext<ContextType>(contextPrototype);
