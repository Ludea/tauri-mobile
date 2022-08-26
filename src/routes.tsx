import Layout from 'layouts/Layout';
import Index from 'views/Index';
import Chat from 'views/Chat';

const routes = [
  {
     path: '',
     element: <Layout />,
     children: [
      { path: '', element: <Index /> },
      { path: '/Chat', element: <Chat /> }
     ]
  },
  
];

export default routes ;
