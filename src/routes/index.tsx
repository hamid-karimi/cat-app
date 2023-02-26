import {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home'));
const ErrorPage = lazy(() => import('@/pages/error'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/error`,
    element: <ErrorPage />,
  },
]);
