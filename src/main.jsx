import { createRoot } from 'react-dom/client';
import './style.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const root = createRoot(document.getElementById('app'));

root.render(<RouterProvider {...{ router: router }} />);
