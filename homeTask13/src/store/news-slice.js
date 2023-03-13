import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const STORIES_LOADING_FAIL = "STORIES_LOADING_FAIL",
   ARTICLE_LOADING_FAIL = "ARTICLE_LOADING_FAIL",
   COMMENTS_LOADING_FAIL = "COMMENTS_LOADING_FAIL";

const initialState = {
   stories: [],
   article: null,
   comments: [],
   subComments: [],
   storiesAreLoading: true,
   articleIsLoading: true,
   commentsAreLoading: true,
};

const newsSlice = createSlice({
   name: "news",
   initialState,
   reducers: {
      loadStories: (state, { payload: storiesData }) => {
         state.stories = storiesData.filter((item) => item !== null);
         state.storiesAreLoading = false;
      },
      loadArticle: (state, { payload: articleData }) => {
         state.article = articleData;
         state.articleIsLoading = false;
      },
      loadComments: (state, { payload: commentsData }) => {
         state.comments = commentsData;
         state.commentsAreLoading = false;
      },
      loadSubComments: (state, { payload: subCommentData }) => {
         state.subComments = [...state.subComments, subCommentData];
      },
      resetNews: (state) => {
         state.stories = [];
         state.storiesAreLoading = true;
      },
      resetArticle: (state) => {
         state.article = null;
         state.comments = [];
         state.subComments = [];
         state.articleIsLoading = true;
         state.commentsAreLoading = true;
      },
      resetComments: (state) => {
         state.comments = [];
         state.subComments = [];
         state.commentsAreLoading = true;
      },
      resetLoadingState: (state, { payload: loadingType }) => {
         if (loadingType === STORIES_LOADING_FAIL) {
            state.storiesAreLoading = false;
         }
         if (loadingType === ARTICLE_LOADING_FAIL) {
            state.articleIsLoading = false;
         }
         if (loadingType === COMMENTS_LOADING_FAIL) {
            state.commentsAreLoading = false;
         }
      },
   },
});

export const newsActions = newsSlice.actions;

export const useNewsSelector = () => useSelector((state) => state.news);

export default newsSlice;
