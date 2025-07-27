import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './sites/App.tsx';
import About from './sites/About.tsx';
import ArticlePage from './sites/ArticlePage.tsx';
import ContextProvider from './store/ContextProvider.tsx';
import Login from './sites/Login.tsx';
import Register from './sites/Register.tsx';
import Admin from './sites/Admin.tsx';

const browserRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/article/:id', element: <ArticlePage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/admin', element: <Admin /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={browserRouter} />
    </ContextProvider>
  </StrictMode>
);
