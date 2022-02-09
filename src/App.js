import './assets/scss/App.scss';
import { routes } from "./router/routes";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProductView from "./views/ProductView";

if (process.env.REACT_APP_PUBLIC_API_MOCKING === 'enabled'){
  require('./mocks');
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate replace to={ routes.home }/> } />
        <Route path={ routes.home } element={ <HomeView/> }/>
        <Route path={ routes.cart } element={ <CartView/> }/>
        <Route path={`${routes.products}:product`} element={ <ProductView/> }/>
      </Routes>
    </div>
  );
}

export default App;
