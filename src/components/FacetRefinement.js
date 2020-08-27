import './FacetRefinement.scss';
import React from 'react';

const FacetRefinement = ({ refinement, isVisible, onSelectionsChanged }) => {
    // render the rating stars if applicable
    let refinementRating = '';
    let style = isVisible ? {display: 'flex'} : {display: 'none'};

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
            style={style}
            disabled={refinement.isEnabled ? false : true} 
            className={`facet-refinement ${refinement.isSelected ? '-selected' : ''}`} 
            onClick={() => onSelectionsChanged('refinements', refinement.id, !refinement.isSelected)}
        >
            {refinementRating}{refinement.label} <span className="count">({refinement.count})</span>
        </button>
    );
}

export default FacetRefinement;