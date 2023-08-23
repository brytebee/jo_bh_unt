import { pages } from 'pages';

const { Home } = pages;

const authenticatedProtectedRoutes = [];

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
];

export { authenticatedProtectedRoutes, publicRoutes };
