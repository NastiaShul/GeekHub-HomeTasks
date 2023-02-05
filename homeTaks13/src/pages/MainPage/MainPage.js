import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { newsActions } from "../../store/news-slice";
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";

const MainPage = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(newsActions.resetArticle());
   }, [dispatch]);

      return (
         <React.Fragment>
            <Header />
            <main>
               <NewsList />
            </main>
         </React.Fragment>
      );
   };

   export default MainPage;
