import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Layout from './layout/Layout';
import '~/shared/styles/index.css';
import { UserContext } from '~/shared/contexts/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ element: <HomePage />, index: true }],
  },
]);

function App() {
  return (
    <UserContext.Provider value={{ id: 12 }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
