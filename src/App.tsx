import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import Layout from 'layouts/Layout';

const App = () => {
  const content = useRoutes(routes);

  return (
    <div>
      {content}
    </div>
  )
}

export default App;
