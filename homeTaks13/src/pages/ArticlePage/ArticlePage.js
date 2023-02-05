import React, { useCallback, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ArticlePage.scss";
import Article from "../../components/Article/Article";
import CommentsList from "../../components/CommentList/CommentsList";
import Preloader from "../../components/Preloader/Preloader";
import Button from "../../components/Button/Button";
import { newsActions } from "../../store/news-slice";
import { fetchStory, fetchComments } from "../../store/news-actions";

const ArticlePage = () => {
   const history = useNavigate ();
   const { id } = useParams();

   const dispatch = useDispatch();
   const articleIsLoading = useSelector(
      (state) => state.news.articleIsLoading
   );
   const stories = useSelector((state) => state.news.stories);
   const findStory = stories.find((item) => item.id === Number(id));

   const article = useSelector((state) => state.news.article);
   const comments = useSelector((state) => state.news.comments);

   const commentsAreLoading = useSelector(
      (state) => state.news.commentsAreLoading
   );

   const loadComments = useCallback(() => {
      if (article !== null && article.kids) {
         dispatch(fetchComments());
      }
   }, [dispatch, article]);

   useEffect(() => {
      if (findStory) {
         dispatch(newsActions.loadArticle(findStory));
      } else {
         dispatch(fetchStory(id));
      }
   }, [findStory, dispatch, id]);

   useEffect(() => { loadComments();}, [loadComments]);

   return (
      <>
         <header className={styles.header}>
            <Button onClick={() => history(-1)} text={"Back"} />
         </header>

         <main>
            {article !== null && (
               <section className={styles["content-padding"]}>
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

                  <section className={styles["content-padding"]}>
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
