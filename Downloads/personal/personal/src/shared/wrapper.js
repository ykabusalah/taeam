import React, { Fragment, useEffect, useState } from "react";
import Helmet from "react-helmet";

import GlobalStyle from "./styles";
import HelmetHtml from "./helmet";


const Wrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (ev) => handleKeyboardInput(ev));
  }, []);

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode;
    if (key === 9) {
      setDisplayOutlines(true);
    }
  };

  return (
    <Fragment>
        <Helmet> 
            <HelmetHtml/>
        </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      {props.children}
    </Fragment>
  );
};


export default Wrapper;
