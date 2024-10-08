import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import App from '../App';
import { BASE_ROUTING } from '../constants';

const router = createBrowserRouter([
  {
    id: 'root',
    path: BASE_ROUTING,
    element: <App />,
    children: [
      {
        id: 'Home',
        index: true,
        element: <Main />,
      },
      {
        id: 'Shop',
        path: `${BASE_ROUTING}/shop`,
        element: <Shop />,
      },
      {
        id: '/About',
        path: `${BASE_ROUTING}/about`,
        element: <About />,
      },
      {
        id: '/Contact',
        path: `${BASE_ROUTING}/contact`,
        element: <Contact />,
      },
    ],
  },
]);

export default router;
