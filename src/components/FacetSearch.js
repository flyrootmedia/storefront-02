import './FacetSearch.scss';
import React, { useState, useEffect } from 'react';

const FacetSearch = ({ placeholderText, onFiltering}) => {
    // state
    const [facetSearchTerm, setFacetSearchTerm] = useState('');

    // update search terms
    useEffect(() => {
        onFiltering(facetSearchTerm.toLowerCase());
    }, [facetSearchTerm, onFiltering]);

    return (
        <div className="facet-search">
            <input 
                type="text" 
                placeholder={placeholderText}
                value={facetSearchTerm}
                onChange={e => setFacetSearchTerm(e.target.value)}>
            </input>
            <i className="fas fa-search"></i>
        </div>
    );
}

export default FacetSearch;