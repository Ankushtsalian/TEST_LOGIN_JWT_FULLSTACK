import React from "react";
import { useState } from "react";
import { Squash } from "hamburger-react";

const Hamburger = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleClosed = () => setIsClosed(!isClosed);

  return (
    <button onClick={toggleClosed} className="burger">
      {" "}
      <Squash isClosed={isClosed} />
    </button>
    // // <button className="hamburger" >

    // {/* </button> */}
  );
};

export default Hamburger;
