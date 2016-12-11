import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({children}) => {
  return (
  <div>
    <HeaderContainer />
    { children }
  </div>
  );
};

export default App;
