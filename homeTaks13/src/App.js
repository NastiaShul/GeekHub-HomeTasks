import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux"

import { fetchNews } from "./store/news-actions";
import MainPage from "./pages/MainPage/MainPage"
import ArticlePage from "./pages/ArticlePage/ArticlePage"

let isInitial = true;

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      if (isInitial) {
         dispatch(fetchNews());
         isInitial = false;
      }
   }, [dispatch]);

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
