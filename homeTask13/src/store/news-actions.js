import { newsActions } from "./news-slice";

import { getStoriesIds, getData } from "../api/hacker-news-api";

export const fetchNews = () => {
   return async (dispatch) => {
      try {
         dispatch(newsActions.resetNews());
         const newsIds = await getStoriesIds();
         const data = await Promise.all(
            newsIds.map((id) => getData(id))
         );
         dispatch(newsActions.loadStories(data));
      } catch (error) {
         console.log("Fetching news failed");
      }
   };
};

export const fetchStory = (id) => {
   return async (dispatch) => {
      try {
         dispatch(newsActions.resetArticle());
         const data = await getData(id);
         dispatch(newsActions.loadArticle(data));
      } catch (error) {
         console.log("Fetching article failed");
      }
   };
};

export const fetchComments = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetComments());
         const kidsIds = getState().news.article.kids;
         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         dispatch(newsActions.loadComments(data));
      } catch (error) {
         console.log("Fetching comments failed");
      }
   };
};

export const fetchSubComments = (kidsIds) => {
   return async (dispatch) => {
      try {
         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         data.forEach((item) => dispatch(newsActions.loadSubComments(item)));
      } catch (error) {
         console.log("Fetching comments failed");
      }
   };
};
