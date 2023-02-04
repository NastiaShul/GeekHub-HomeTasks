import React from "react";

import styles from "./Button.css";

const Button = (props) => {
   return (
      <button
         type={"button"}
         disabled={props.disabled}
         className={styles.button}
         onClick={props.onClick}
      >
         {props.text}
      </button>
   );
};

export default React.memo(Button);