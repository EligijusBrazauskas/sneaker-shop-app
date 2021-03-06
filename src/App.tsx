import { routes } from './shared/router/routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Providers from './shared/context/Providers';
import { GlobalStyles } from './assets/styles/global/GlobalStyles';
import { ResetStyles } from './assets/styles/global/ResetStyles';
import MainLayout from './layouts/MainLayout';

if (process.env.REACT_APP_PUBLIC_API_MOCKING === 'enabled') {
  require('./shared/mocks');
}

function App() {
  return (
    <>
      <ResetStyles/>
      <GlobalStyles/>
      <Providers>
        <div className="App">
          <Routes>
            <Route path="/" element={ <Navigate to={ `${ routes.main }${ routes.home }` }/> }/>
            <Route path={ `${ routes.main }*` } element={ <MainLayout/> }/>
          </Routes>
        </div>
      </Providers>
    </>
  );
}

export default App;
