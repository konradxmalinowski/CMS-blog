import type { Article } from './components/Articles';

export const fetchArticles = async () => {
  try {
    const response: Response = await fetch(
      'http://localhost/cms-blog/backend/articles.php'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }

    const data: Article[] = await response.json();

    if (data.length === 0) {
      throw new Error('No articles were found');
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log('Message', error?.message);
    } else {
      console.log('Unknown error', error);
    }
  }
};
