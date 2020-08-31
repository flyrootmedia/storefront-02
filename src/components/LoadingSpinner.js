import './LoadingSpinner.scss';
import React from 'react';

// NOTE: got this from a Stephen Grider course and modified it. It relies on Semantic UI
const LoadingSpinner = (props) => {
    return (
        <div class="loading-spinner">
            <div className="ui active inverted dimmer">
                <div className="ui big text loader">
                    {props.message}
                </div>
            </div>
        </div> 
    );
};

LoadingSpinner.defaultProps = {
    message: 'Loading...'
}

export default LoadingSpinner;