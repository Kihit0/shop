import { Outlet } from 'react-router-dom';
import LayoutPages from './components/ux/Layouts/LayoutPages/LayoutPages';

const App = () => {
  return (
    <LayoutPages>
      <Outlet />
    </LayoutPages>
  );
};

export default App;
