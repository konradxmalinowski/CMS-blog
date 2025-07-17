import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './sites/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './sites/About.tsx';
import ArticlePage from './sites/ArticlePage.tsx';
import ContextProvider from './store/ContextProvider.tsx';

const browserRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/article/:id', element: <ArticlePage /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={browserRouter} />
    </ContextProvider>
  </StrictMode>
);
