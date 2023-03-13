import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { newsActions, useNewsSelector } from "../../store/news-slice";
import { fetchStory, fetchComments } from "../../store/news-actions";

import Article from "../../components/Article";
import CommentsList from "../../components/CommentList";
import Preloader from "../../components/Preloader";
import Button from "../../components/Button";

import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
   const history = useNavigate();
   const { id } = useParams();

   const dispatch = useDispatch();
   const {
      articleIsLoading,
      commentsAreLoading,
      stories,
      article,
      comments } = useNewsSelector();

   const findStory = stories.find((item) => item.id === Number(id));

   const loadComments = useCallback(() => {
      if (article !== null && article.kids) {
         dispatch(fetchComments());
      }
   }, [dispatch, article]);

   useEffect(() => {
      if (findStory) {
         dispatch(newsActions.loadArticle(findStory));
      }
      else if (!findStory) {
         history("/");
      }
      else {
         dispatch(fetchStory(id));
      }
   }, [findStory, dispatch, id]);

   useEffect(() => { loadComments(); }, [loadComments]);

   return (
      <>
         <header className={styles.header}>
            <Button onClick={() => history(-1)} text={"Back"} />
         </header>

         <main>
            {article !== null && (
               <section className={styles.content}>
                  {articleIsLoading ? (
                     <Preloader />
                  ) : (
                     <Article {...article} />
                  )}
               </section>
            )}

            {article !== null && article.kids && (
               <>
                  <Button
                     onClick={loadComments}
                     text={"Update comments"}
                  />

                  <section className={styles.content}>
                     {commentsAreLoading ? (
                        <Preloader />
                     ) : (
                        <CommentsList comments={comments} />
                     )}
                  </section>
               </>
            )}
         </main>
      </>
   );
};

export default ArticlePage;
