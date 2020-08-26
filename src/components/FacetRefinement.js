import './FacetRefinement.scss';
import React, { useState, useEffect, useRef } from 'react';

const FacetRefinement = ({ refinement, onSelectionsChanged }) => {
    const [isSelected, setIsSelected] = useState(refinement.isSelected);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            onSelectionsChanged(refinement.id, isSelected);
        }
    }, [isSelected, onSelectionsChanged, refinement.id]);

    // render the rating stars if applicable
    let refinementRating = '';

    if (refinement.rating) {
        refinementRating = 
            <span 
                aria-label={`${refinement.count} results for ${refinement.label}`} 
                className={`ratings-stars -rate-${refinement.rating}`}>
            </span>
    }

    return (
        <button 
            type="button"
            disabled={refinement.isEnabled ? false : true} 
            className={`facet-refinement ${isSelected ? '-selected' : ''}`} 
            onClick={() => setIsSelected(!isSelected)}
        >
            {refinementRating}{refinement.label} <span data-count className="count">({refinement.count})</span>
        </button>
    );
}

export default FacetRefinement;