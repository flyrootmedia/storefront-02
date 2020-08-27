import './StyledButton.scss';
import React from 'react';

const StyledButton = ({cssClass, isDisabled, isIconBtn, btnText, onClick }) => {
    return (
        <button 
            type="button" 
            className={`styled-button ${cssClass}`}
            disabled={isDisabled} 
            onClick={onClick}>
                {isIconBtn ? <span className="screen-reader-only">{btnText}</span> : btnText}
        </button>
    );
}

export default StyledButton;