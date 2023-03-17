import React from "react";
import "./Balloon.scss";

const Balloon = React.forwardRef(({ pop, index }, ref) => {
   return (
      <div
         ref={el => ref.current[index] = el}
         className="balloon"
         onClick={pop}
         onTouchStart={pop}>
      </div >
   )
});

export default Balloon;