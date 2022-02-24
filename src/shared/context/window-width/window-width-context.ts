import React from 'react';

interface windowWidthContextInterface {
  width: number;
  changeWidth: () => void;
}

const WindowWidthContext = React.createContext<windowWidthContextInterface>({
  width: 0,
  changeWidth: () => {},
});

export default WindowWidthContext;
