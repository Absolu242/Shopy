import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './components/view/LandingPage/LandingPage';
import ProductCollection
  from './components/view/ProductCollection/ProductCollection';
import SingleProductPage
  from './components/view/SingleProductPage/SingleProductPage';
import Header from './components/view/Header/Header';
import HotDeals from '../src/components/view/HotDeals/HotDeals'
import Footer from './components/view/Footer/Footer';
import Basket from './components/view/Basket/Basket';

function App () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/productCollection"
            component={ProductCollection}
          />
          <Route
            exact
            path="/HotDeals"
            component={HotDeals}
          />
           <Route
            exact
            path="/Basket"
            component={Basket}
          />
          <Route
            exact
            path="/product/:productId"
            component={SingleProductPage}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
