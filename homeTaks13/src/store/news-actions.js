import { newsActions } from "./news-slice";

import { getStoriesIds, getData } from "../API/hackerNewsAPI";

export const fetchNews = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetNews());

         const newsIds = await getStoriesIds();
         const data = await Promise.all(
            newsIds.map((id) => getData(id))
         );
         dispatch(newsActions.setLoadStories(data));
      } catch (error) {
         console.log(error);
      }
   };
};

export const fetchStory = (id) => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetArticle());
         const data = await getData(id);
         dispatch(newsActions.setLoadArticle(data));
      } catch (error) {
         console.log(error);
      }
   };
};

export const fetchComments = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetComments());
         const kidsIds = getState().news.article.kids;
         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         dispatch(newsActions.oadComments(data));
      } catch (error) {
         console.log(error);
      }
   };
};

export const fetchSubComments = (kidsIds) => {
   return async (dispatch, getState) => {
      try {
         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         data.forEach((item) => dispatch(newsActions.loadSubComments(item)));
      } catch (error) {
         console.log(error);
      }
   };
};
