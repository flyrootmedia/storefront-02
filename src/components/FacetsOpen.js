import './FacetsOpen.scss';

import React from 'react';
import StyledButton from './StyledButton';

const FacetsOpen = ({ onClick }) => {
    return (
        <StyledButton
            cssClass='facets-open' 
            dataJS='facets-open' 
            dataValue='' 
            isDisabled={false}
            isIconBtn={false} 
            btnText='Filters'
            onClick={onClick}
        />
    );
}

export default FacetsOpen;