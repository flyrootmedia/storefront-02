import './AlertBox.scss';
import React, { useState, useEffect } from 'react';
import StyledButton from './StyledButton';

const AlertBox = ({ cssClass, isDismissable, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const closeButtonClick = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 400);
    };

    let closeButton = '';

    if (isDismissable) {
        closeButton = 
            <StyledButton
                cssClass='alert-box_close fas fa-times'
                isDisabled={false}
                isIconBtn={true} 
                btnText='Close'
                onClick={closeButtonClick}
            />
    }

    return (
        <div className={`alert-box small-screen-padding ${isOpen ? '-open' : ''} ${isClosing ? '-is-closing' : ''} ${cssClass ? cssClass : ''}`}>
            <div className="alert-box_inner">
                {closeButton}
                {children}
            </div>
        </div>
    );
};

export default AlertBox;