import './FacetsMenu.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Facet from './Facet';

const FacetsMenu = ({ facets, isOpen, onSelectionsChanged, onCloseClick }) => {
    const [isApplyEnabled, setIsApplyEnabled] = useState(true);

    const onRefinementSelectionsChanged = (paramToChange, changedParamValue, isSelected) => {
        setIsApplyEnabled(false);
        onSelectionsChanged(paramToChange, changedParamValue, isSelected);
    };

    if (!facets) {
        return null;
    }

    // render the facets list
    const renderedFacets = facets.map((facet) => {
        return (
            <Facet 
                key={facet.id} 
                facet={facet}
                isFacetsMenuOpen={isOpen}
                onSelectionsChanged={onRefinementSelectionsChanged} 
            />
        );
    });

    // TODO: replace buttons with "StyledButton" and give configurable size class
    return (
        <div className={`facets-menu ${isOpen ? '-open' : ''}`}>
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
                    disabled={isApplyEnabled}
                    onClick={onCloseClick}>
                        Apply Selections
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { facets: state.plpResults.facets}
};

export default connect(mapStateToProps)(FacetsMenu);