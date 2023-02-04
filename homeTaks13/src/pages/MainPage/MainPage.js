import React, { useEffect } from "react";
import { useDispatch} from "react-redux";

import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";

const MainPage = () => {


   return (
      <>
         <Header />
         <main>
            <NewsList />
         </main>
      </>
   );
};

export default MainPage;
