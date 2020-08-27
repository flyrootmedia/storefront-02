import './ProductsGrid.scss'; 
import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {

    const renderedProducts = products.map((product) => {
        return <ProductCard key={product.name} product={product} />
    });

    return (
        <div className="products-grid">
            {renderedProducts}
        </div>
    );
}

export default ProductsGrid;