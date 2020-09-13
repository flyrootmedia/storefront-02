import './App.scss';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import ProductListingPage from './pages/ProductListingPage';
import MyAccountPage from './pages/MyAccountPage';
import CartPage from './pages/CartPage';
import GlobalFooter from './GlobalFooter';
import history from '../history';

const App = () => {
    return (
        <div className="site">
            <Router history={history}>
            <GlobalHeader />
                <Route path="/" exact component={ProductListingPage} />
                <Route path="/my-account" exact component={MyAccountPage} />
                <Route path="/cart" exact component={CartPage} />
            <GlobalFooter /> 
            </Router>
        </div>
    );
};

export default App;