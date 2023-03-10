import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

const router = createBrowserRouter([
  { index: true, element: <HomePage />, path: '/' },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
