import './App.scss';
import React from 'react';
import GlobalHeader from './GlobalHeader';
import ProductListingPage from './ProductListingPage';
import GlobalFooter from './GlobalFooter';

const App = () => {
    return (
        <div className="site">
            <GlobalHeader />
            <ProductListingPage 
                initialFacetIds='000000' 
                initialSort='featured' 
                itemsPerPage={20} 
                startingPageIndex={0}
            />
            <GlobalFooter /> 
        </div>
    );
};

export default App;