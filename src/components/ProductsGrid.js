import './ProductsGrid.scss'; 
import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {

    if (!products) {
        return null;
    }
    
    const renderedProducts = products.map((product) => {
        return <ProductCard key={product.name} product={product} />
    });

    return (
        <div className="products-grid">
            {renderedProducts}
        </div>
    );
}
const mapStateToProps = (state) => {
    return { products: state.plpResults.products}
};

export default connect(mapStateToProps)(ProductsGrid);
