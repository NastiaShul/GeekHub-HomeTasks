import React from "react";

import CardContent from "../CardContent";

const Article = (props) => {
   console.log('props', props)
   return (
      <article>
         <CardContent {...props} />
         {props.text}
         {props.url && (
            <p>
               <a
                  href={props.url}
                  target="_blank"
                  rel="noreferrer"
               >
                  Read source
               </a>
            </p>
         )}
      </article>
   );
};

export default Article;
