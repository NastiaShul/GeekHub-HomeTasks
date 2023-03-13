import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchNews } from "./store/news-actions";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

let isInitial = true;

function AppProvider() {
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
      },
      {
         path: "*",
         element: <NotFoundPage />
      }
   ]);
   return (
      elements
   );
}

export default AppProvider;
