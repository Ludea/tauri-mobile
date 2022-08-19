import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import Layout from 'layouts/Layout';

const App = () => {
  const content = useRoutes([
  {
     path: '',
     element: <Layout />,
  },
]);

  return (
    <div>
      {content}  
    </div>
  )
}

export default App;
