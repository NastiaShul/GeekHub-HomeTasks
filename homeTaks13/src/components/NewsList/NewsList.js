import { useSelector } from "react-redux";

import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

const NewsList = () => {
   const storiesAreLoading = useSelector(
      (state) => state.news.storiesAreLoading
   );
   const stories = useSelector((state) => state.news.stories);
   const cards = [...stories];

   return (
      <>
         {storiesAreLoading && <Preloader />}
            <ul className={styles.cardList}>
               {cards.slice().map((story) => (
                  <NewsCard key={story.id} {...story} />
               ))}
            </ul>
      </>
   );
};

export default NewsList;
