import { useNewsSelector } from "../../store/news-slice";

import NewsCard from "../NewsCard";
import Preloader from "../Preloader";

import styles from "./NewsList.module.scss";

const NewsList = () => {
   const { storiesAreLoading, stories } = useNewsSelector();

   const cards = [...stories];

   return (
      <>
         {storiesAreLoading && <Preloader />}
         <ul className={styles.cardList}>
            {cards.map((story) => (
               <NewsCard key={story.id} {...story} />
            ))}
         </ul>
      </>
   );
};

export default NewsList;
