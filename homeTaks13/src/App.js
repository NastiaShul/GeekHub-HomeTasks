import { useRoutes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';



function App() {
   const elements = useRoutes([
      {
         path: "/",
         element: <MainPage />
      },
      {
         path: "/article/:id",
         element: <ArticlePage />
      }
   ]);
   return (
      elements
   );
}

export default App;
