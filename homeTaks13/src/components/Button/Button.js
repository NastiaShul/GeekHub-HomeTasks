import React from "react";

import styles from "./Button.module.scss";

const Button = (props) => {
   return (
      <button
         type={props.type || "button"}
         role={props.type || "none"}
         disabled={props.disabled}
         className={styles.button}
         onClick={props.onClick}
      >
         {props.text}
      </button>
   );
};

export default React.memo(Button);
