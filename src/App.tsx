import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Layout from './layout/Layout';
import '~/shared/styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ element: <HomePage />, index: true }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
