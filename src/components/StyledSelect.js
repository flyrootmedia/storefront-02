import './StyledSelect.scss';

import React from 'react';

const StyledSelect = ({ labelText, options, dataJS, id, cssClass, onChange}) => {

    // in React, set a value to the select rather than attribute "selected" on the option
    let selectedOptionValue = '';

    const opts = options.map((option) => {
        // set the selected option
        if (option.selected) {
            selectedOptionValue = option.value;
        }

        return (
            <option 
                key={option.value}
                data-option-key={option.optionKey} 
                value={option.value}>
                    {option.display}
            </option>
        );
    });

    return (
        <div className={`styled-select ${cssClass}`}>
            <label htmlFor={id}>{labelText}</label>
            <select 
                data-js={dataJS} 
                id={id} 
                name={id} 
                defaultValue={selectedOptionValue} 
                onChange={onChange}>
                {opts}
            </select>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
}

export default StyledSelect;