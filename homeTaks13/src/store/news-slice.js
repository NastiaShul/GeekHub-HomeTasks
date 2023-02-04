import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
   name: "news",
   initialState: {
      stories: [],
      article: null,
      comments: [],
      subComments: [],
      storiesAreLoading: true,
      articleIsLoading: true,
      commentsAreLoading: true
   },
   reducers: {
      setLoadStories(state, action) {
         const storiesData = action.payload;
         const filteredStories = storiesData.filter((item) => item !== null);
         state.stories = filteredStories;
         state.storiesAreLoading = false;
      },
      setLoadArticle(state, action) {
         state.article = action.payload;
         state.articleIsLoading = false;
      },
      setLoadComments(state, action) {
         state.comments = action.payload;
         state.commentsAreLoading = false;
      },
      setloadSubComments(state, action) {
         state.subComments = [...state.subComments, action.payload];
      },
   }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
