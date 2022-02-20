import WindowWidthContext from "./window-width-context";
import React, { useEffect, useState } from "react";

const WindowWidthProvider = ({ children }: any) => {

  const [width, setWidth] = useState(0);

  const windowResizeHandler = () => {
    const currentWidth = window.innerWidth;
    setWidth(+currentWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
    windowResizeHandler();
    return () => window.removeEventListener('resize', windowResizeHandler);
  }, []);

  const windowWidthContext = {
    width,
    changeWidth: windowResizeHandler
  };

  return (
    <WindowWidthContext.Provider value={ windowWidthContext }>
      { children }
    </WindowWidthContext.Provider>
  );
};

export default WindowWidthProvider;
