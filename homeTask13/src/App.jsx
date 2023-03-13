import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { fetchNews } from "./store/news-actions";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import AppProvider from './AppProvider'
import store from "./store/index";

function App() {

   return (
      <BrowserRouter >
         <Provider store={store}>
            <AppProvider />
         </Provider>
      </BrowserRouter >
   );
}

export default App;
