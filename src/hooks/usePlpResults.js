import { useState, useEffect } from 'react';

const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage, requestPath) => {

    // NOTE: only passing requestPath for now to differentiate between the static results

    const [plpResults, setPlpResults] = useState({});
    const baseURL = 'http://localhost:3000/'

    useEffect(() => {
        plpRequest(selectedRefinements, sort, itemsPerPage, activePage, requestPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinements, sort, itemsPerPage, activePage, requestPath]);

    const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam, newRequestPath) => {
        try {
            let url = new URL(`${baseURL}${newRequestPath}`);
            // NOTE: building the query string this way because using toString() on a params object causes the "+" that
            // concatenates facets values to be encoded. Is there a better workaround?
            let query = `facets=${facetsParam}&sort=${sortParam}&itemsPerPage=${itemsPerPageParam}&pageStartIndex=${pageStartIndexParam}`;
            let response = await fetch (`${url}?${query}`, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`There was an error loading the requested data. status: ${response.status}`);
            } else {
                let data = await response.json();
                setPlpResults(data);
                window.history.pushState({}, '', `?${query}`);
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);
            }
        } catch (error) {
            alert(`There was an error loading the requested data. status: ${error}`)
        }
        
    };

    return [plpResults, plpRequest];
};

export default usePlpResults;