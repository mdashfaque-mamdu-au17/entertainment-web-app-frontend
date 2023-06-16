import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Signup, Login, Bookmarked, Home, Movies, TvSeries } from './pages';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/movies', element: <Movies /> },
  { path: '/tv-series', element: <TvSeries /> },
  { path: 'bookmarks', element: <Bookmarked /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
