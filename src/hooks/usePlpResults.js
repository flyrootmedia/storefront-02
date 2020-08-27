import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage, requestPath) => {

    // NOTE: only passing requestPath for now to differentiate between the static results

    const [plpResults, setPlpResults] = useState({});

    const plp = axios.create({
        baseURL: 'http://localhost:3000/'
    });

    useEffect(() => {
        plpRequest(selectedRefinements, sort, itemsPerPage, activePage, requestPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinements, sort, itemsPerPage, activePage, requestPath]);

    const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam, newRequestPath) => {
        await plp.get(newRequestPath, {
            params: {
                facets: facetsParam,
                sort: sortParam,
                itemsPerPage: itemsPerPageParam,
                pageStartIndex: pageStartIndexParam
            },
            paramsSerializer: params => {
                return `facets=${facetsParam}&sort=${sortParam}&itemsPerPage=${itemsPerPageParam}&pageStartIndex=${pageStartIndexParam}`; 
            }
        })
        .then(response => {
            setPlpResults(response.data);
        })
        .catch( error => {
            alert(`There was an error loading the requested results: ${error}`);
        });
    };

    return [plpResults, plpRequest];
};

export default usePlpResults;