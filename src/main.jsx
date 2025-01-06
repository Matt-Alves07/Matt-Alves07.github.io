import './index.css';

import App from './App.jsx';
import { StrictMode } from 'react';

import Home from './routes/Home/Home.jsx';
import Stack from './routes/Stack/Stack.jsx';
import Projects from './routes/Projects/Projects.jsx';
import NotFound from './routes/NotFound/NotFound.jsx';
import Experience from './routes/Experience/Experience.jsx';

import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/stack", element: <Stack /> },
      { path: "/projects", element: <Projects /> },
      { path: "/experiences", element: <Experience />},
      { path: "*", element: <NotFound /> },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
