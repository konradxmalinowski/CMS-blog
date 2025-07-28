import type { Article } from './components/Articles';

export type resultType = {
  message?: string;
  success: boolean;
};

export type resultCheckType = {
  success: boolean;
  name?: string;
};

export type resultLogoutType = {
  success: boolean;
  message?: string;
};

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

export const login = async (email: string = '', password: string = '') => {
  if (!email || !password) {
    alert('Email and password must be filled');
    return;
  }

  try {
    const response = await fetch(
      'http://localhost/cms-blog/backend/login.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const result: resultType = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error?.message };

    return { success: false, message: 'Failed to log in' };
  }
};

export const logout = async () => {
  try {
    const response: Response = await fetch(
      'http://localhost/cms-blog/backend/logout.php',
      {
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to logout');
    }

    const result: resultLogoutType = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message };

    return { success: false, message: 'Failed to logout' };
  }
};

export const register = async (
  name: string = '',
  email: string = '',
  password: string = ''
) => {
  if (!email || !password || !name) {
    alert('Email, name and password must be filled');
    return;
  }

  try {
    const response = await fetch(
      'http://localhost/cms-blog/backend/register.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    const result: resultType = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error?.message };

    return { success: false, message: 'Failed to register' };
  }
};

export const checkIfIsLoggedIn = async () => {
  try {
    const response: Response = await fetch(
      'http://localhost/cms-blog/backend/checkIfIsLoggedIn.php',
      {
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to check if user is legged in');
    }

    const result: resultCheckType = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) return { success: false };

    return { success: false };
  }
};
