import './Facet.scss';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import FacetRefinement from './FacetRefinement';

const Facet = ({ facet, onSelectionsChanged }) => {
    // consts/vars
    const baseFacetHeight = 46;
    let facetSearch = '';
    let seeAll = '';

    // state
    const [facetSearchTerm, setFacetSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(facet.isOpen);
    const [facetHeight, setFacetHeight] = useState(`${baseFacetHeight}px`);

    // refs
    const refinementsList = useRef(null);

    // gets the facet height based on whether or not the facet is open, and based on the
    // existence of the search bar. NOTE: needed to use "useCallback" to avoid missing dependency issue
    // and recreating the function on every render
    const getFacetHeight = useCallback(() => {
        let refinementsListHeight = isOpen ? refinementsList.current.offsetHeight : 0;
        let searchHeight = isOpen && facet.isFilterable ? 45 : 0;

        return `${baseFacetHeight + refinementsListHeight + searchHeight}px`;
    }, [isOpen, facet.isFilterable]);

    // set/update the open state
    useEffect(() => {
        setFacetHeight(getFacetHeight());
    }, [isOpen, getFacetHeight]);

    // set and render facet search if applicable
    if (facet.isFilterable) {
        facetSearch = 
            <div data-facet-search className="facet_search">
                <input 
                    type="text" 
                    placeholder={facet.filterLabelText}
                    value={facetSearchTerm}
                    onChange={e => setFacetSearchTerm(e.target.value)}>
                </input>
                <i className="fas fa-search"></i>
            </div>
    }

    // render the list of refinements
    const renderedRefinements = facet.refinements.map((refinement) => {
        return (
            <FacetRefinement 
                key={refinement.id} 
                refinement={refinement} 
                onSelectionsChanged={onSelectionsChanged}
            />
        );
    });

    // TODO: load refinements on "see all" click
    const onSeeAllClick = (seeAllType) => {
        console.log('see all clicked:', seeAllType);
    };

    // render the "see all" button if applicable
    if (facet.seeAll) {
        seeAll = 
            <button 
                className="-see-all link-btn"
                onClick={() => onSeeAllClick(facet.seeAll)}>
                    See All
            </button>
    }

    return (
        <div className={`facet ${isOpen ? '-open' : ''}`} style={{height: facetHeight}}>
            <button 
                className="facet_header" 
                onClick={() => setIsOpen(!isOpen)}
            >
                    {facet.label}
            </button>
            {facetSearch}
            <div ref={refinementsList} className={`facet_options -overflow ${facet.isFilterable ? '-filterable' : ''}`}>
                {renderedRefinements}
                {seeAll}
            </div>
        </div>
    );
}

export default Facet;