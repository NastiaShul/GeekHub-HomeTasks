import React from "react";
import "./Balloon.scss";

const Balloon = ({ pop }) => {
   return <div className="balloon" onClick={pop} onTouchStart={pop} />;
};

export default Balloon;