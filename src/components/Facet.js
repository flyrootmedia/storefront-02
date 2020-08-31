import './Facet.scss';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import FacetRefinement from './FacetRefinement';
import FacetSearch from './FacetSearch';
import usePlpSeeAll from '../hooks/usePlpSeeAll';

const Facet = ({ facet, isFacetsMenuOpen, onSelectionsChanged }) => {
    // consts/vars
    const baseFacetHeight = 46;
    let facetSearch = '';
    let seeAll = '';

    // state
    const [isOpen, setIsOpen] = useState(facet.isOpen);
    const [allLoaded, setAllLoaded] = useState(!facet.seeAll);
    const [facetHeight, setFacetHeight] = useState(`${baseFacetHeight}px`);
    const [facetSearchTerm, setFacetSearchTerm] = useState('');
    const [seeAllResults, seeAllRequest] = usePlpSeeAll();

    // refs
    const refinementsList = useRef(null);

    // gets the facet height based on whether or not the facet is open, and based on the
    // existence of the search bar and whether user is searching. NOTE: needed to use "useCallback" to 
    // avoid missing dependency issue and recreating the function on every render
    const getFacetHeight = useCallback(() => {
        let refinementsListHeight = isOpen ? refinementsList.current.offsetHeight : 0;
        let searchHeight = isOpen && facet.isFilterable ? 45 : 0;
        return `${baseFacetHeight + refinementsListHeight + searchHeight}px`;
    }, [isOpen, facet.isFilterable]);

    // set/update the height when opening/closing or searching
    useEffect(() => {
        setFacetHeight(getFacetHeight());
    }, [isOpen, facetSearchTerm, allLoaded, isFacetsMenuOpen, getFacetHeight]);

    // set and render facet search if applicable
    if (facet.isFilterable) {
        facetSearch = 
            <FacetSearch
                placeholderText={facet.filterLabelText}
                onFiltering={(facetSearchTerm) => setFacetSearchTerm(facetSearchTerm)}
            />
    }

    const onRefinementClick = (paramToChange, changedParamValue, isSelected) => {
        onSelectionsChanged(paramToChange, changedParamValue, isSelected);
        //setAllLoaded(false);
    };

    // render the list of refinements
    const renderedRefinements = facet.refinements.map((refinement) => {
        let isVisible = true;

        if (facet.isFilterable && facetSearchTerm) {
            isVisible = refinement.label.toLowerCase().indexOf(facetSearchTerm) > -1;
        }

        return (
            <FacetRefinement 
                key={refinement.id} 
                refinement={refinement} 
                onSelectionsChanged={(paramToChange, changedParamValue, isSelected) => onRefinementClick(paramToChange, changedParamValue, isSelected)}
                isVisible={isVisible}
            />
        );
    });

    useEffect(() => {
        if (seeAllResults.refinements) {
            // this direct assignment feels like an anti-pattern, but I tried using state 
            // and it broke the isSelected value for some reason. Removed the see all property from the 
            // brands facet for now since it isn't critical. Related issues #9 and #17 opened
            facet.refinements = seeAllResults.refinements;
            setAllLoaded(true);
        }
    }, [seeAllResults, facet.refinements]);

    const onSeeAllClick = useCallback((seeAllType) => {
        // NOTE: customize this by "seeAllType" if needs more than brands
        let requestPath = '/apis/plpSeeAllBrands.json';
        seeAllRequest(requestPath);
    }, [seeAllRequest]);

    // render the "see all" button if applicable
    if (facet.seeAll && !allLoaded) {
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
                onClick={() => setIsOpen(!isOpen)}>
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