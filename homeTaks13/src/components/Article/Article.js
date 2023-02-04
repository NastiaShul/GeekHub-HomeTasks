import React from "react";

import CardContent from "../CardContent/CardContent";

const Article = (props) => {
   return (
      <article>
         <CardContent {...props} />
         <p>
            <a
               href={props.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               Read source
            </a>
         </p>
      </article>
   );
};

export default Article;
