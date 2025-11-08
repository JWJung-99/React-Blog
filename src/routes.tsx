import Error from '@components/error/Error';
import Layout from '@components/layout/Layout';
import Admin from '@pages/private/admin/Admin';
import NewPost from '@pages/private/new/NewPost';
import Portfolio from '@pages/public/portfolio/Portfolio';
import Category from '@pages/public/posts/category/Category';
import Post from '@pages/public/posts/post/Post';
import Posts from '@pages/public/posts/Posts';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/posts/:_category',
        element: <Category />,
      },
      {
        path: '/post/:_id',
        element: <Post />,
      },
      {
        path: '/post/new',
        element: <NewPost />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]);

export default router;
