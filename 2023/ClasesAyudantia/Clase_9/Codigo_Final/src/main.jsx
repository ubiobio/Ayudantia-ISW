import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListCharacters from './components/characteres/ListCharacters.jsx';
import Listepisodes from './components/episodes/ListEpisodes.jsx';
import Root from './components/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/characters',
        element: <ListCharacters />,
      },
      {
        path: '/episodes',
        element: <Listepisodes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
