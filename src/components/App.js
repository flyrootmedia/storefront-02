import './App.scss';
import React from 'react';
import GlobalHeader from './GlobalHeader';
import ProductListingPage from './ProductListingPage';
import GlobalFooter from './GlobalFooter';

const App = () => {
    return (
        <div className="site">
            <GlobalHeader />
            <ProductListingPage />
            <GlobalFooter /> 
        </div>
    );
};

export default App;