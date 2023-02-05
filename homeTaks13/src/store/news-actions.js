import { newsActions } from "./news-slice";
import { errorActions } from "./error-slice";

import { getStoriesIds, getData } from "../api/hacker-news-api";

export const fetchNews = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetNews());
         const notification = getState().error.notification;
         if (notification) {
            dispatch(errorActions.resetNotification());
         }

         const newsIds = await getStoriesIds();
         const data = await Promise.all(
            newsIds.map((id) => getData(id))
         );
         dispatch(newsActions.loadStories(data));
      } catch (error) {
         dispatch(newsActions.resetLoadingState("STORIES_LOADING_FAIL"));
         dispatch(
            errorActions.showError({
               title: "Error!",
               message: "Fetching news failed! Try again later."
            })
         );
      }
   };
};

export const fetchStory = (id) => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetArticle());
         const notification = getState().error.notification;
         if (notification) {
            dispatch(errorActions.resetNotification());
         }

         const data = await getData(id);
         dispatch(newsActions.loadArticle(data));
      } catch (error) {
         dispatch(newsActions.resetLoadingState("ARTICLE_LOADING_FAIL"));
         dispatch(
            errorActions.showError({
               title: "Error!",
               message: "Fetching article failed! Try again later."
            })
         );
      }
   };
};

export const fetchComments = () => {
   return async (dispatch, getState) => {
      try {
         dispatch(newsActions.resetComments());
         const notification = getState().error.notification;
         if (notification) {
            dispatch(errorActions.resetNotification());
         }

         const kidsIds = getState().news.article.kids;
         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         dispatch(newsActions.loadComments(data));
      } catch (error) {
         dispatch(newsActions.resetLoadingState("COMMENTS_LOADING_FAIL"));
         dispatch(
            errorActions.showError({
               title: "Error!",
               message: "Fetching comments failed! Try again later."
            })
         );
      }
   };
};

export const fetchSubComments = (kidsIds) => {
   return async (dispatch, getState) => {
      try {
         const notification = getState().error.notification;
         if (notification) {
            dispatch(errorActions.resetNotification());
         }

         const data = await Promise.all(kidsIds.map((id) => getData(id)));
         data.forEach((item) => dispatch(newsActions.loadSubComments(item)));
      } catch (error) {
         dispatch(newsActions.resetLoadingState("COMMENTS_LOADING_FAIL"));
         dispatch(
            errorActions.showError({
               title: "Error!",
               message: "Fetching comments failed! Try again later."
            })
         );
      }
   };
};
