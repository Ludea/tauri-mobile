import Layout from 'layouts/Layout';
import Index from 'views/Index';

const routes = [
  {
     path: '',
     element: <Layout />,
     children: [
      { path: '', element: <Index /> }
     ]
  },
];

export default routes ;
