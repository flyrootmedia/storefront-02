import './FacetsMenu.scss';

import React from 'react';
import Facet from './Facet';

const FacetsMenu = ({ facets, isOpen, onSelectionsChanged, onCloseClick }) => {
    // render the facets list
    const renderedFacets = facets.map((facet) => {
        return (
            <Facet 
                key={facet.id} 
                facet={facet} 
                onSelectionsChanged={onSelectionsChanged} 
            />
        );
    });

    return (
        <div className={`facets-menu ${isOpen ? '-open' : ''}`} data-facets-wrap>
            <div className="facets-menu_facets">
                <h2>Filter Results By:</h2>
                <button 
                    type="button" 
                    className="facets-menu_facets-close btn -primary -close" 
                    onClick={onCloseClick}>
                        &times;
                </button>
                <div className="facets-menu_facets-scroll-wrapper">
                    {renderedFacets}
                </div>
                <button 
                    type="button" 
                    className="facets-menu_facets-apply btn -primary" 
                    disabled 
                    onClick={onCloseClick}>
                        Apply Selections
                </button>
            </div>
        </div>
    );
}

export default FacetsMenu;