import './StyledSelect.scss';
import React from 'react';

const StyledSelect = ({ labelText, options, isDisabled, id, cssClass, onChange}) => {

    // in React, set a value to the select rather than attribute "selected" on the option
    let selectedOptionValue = '';

    const opts = options.map((option) => {
        // set the selected option
        // NOTE: this will set the value on the select from the rendered data, overriding the default 
        // browser behavior. If the options are ever hardcoded, will need to set the "defaultValue" 
        // param on the select instead
        if (option.selected) {
            selectedOptionValue = option.value;
        }

        return (
            <option 
                key={option.value}
                value={option.value}
            >
                    {option.display}
            </option>
        );
    });

    return (
        <div className={`styled-select ${cssClass} ${isDisabled ? '-disabled' : ''}`}>
            <label htmlFor={id}>{labelText}</label>
            <select
                id={id} 
                name={id} 
                disabled={isDisabled}
                value={selectedOptionValue} 
                onChange={onChange}>
                {opts}
            </select>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
}

export default StyledSelect;