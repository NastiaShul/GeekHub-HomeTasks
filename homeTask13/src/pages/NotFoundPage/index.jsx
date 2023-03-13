import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
   const history = useNavigate();
   return (
      <div>
         <header>
            <Button onClick={() => history(-1)} text={"Back"} />
         </header>
         <h1 className={styles.title}>Sorry, the page is not found</h1>
      </div>
   );
};

export default NotFoundPage;