import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import App from '../App';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <App />,
    children: [
      {
        id: 'Home',
        index: true,
        element: <Main />,
      },
      {
        id: 'Shop',
        path: 'shop',
        element: <Shop />,
      },
      {
        id: 'About',
        path: 'about',
        element: <About />,
      },
      {
        id: 'Contact',
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
