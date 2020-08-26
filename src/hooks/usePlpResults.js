import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage) => {
    const [plpResults, setPlpResults] = useState({});

    useEffect(() => {
        plpRequest(selectedRefinements, sort, itemsPerPage, activePage);
    }, [selectedRefinements, sort, itemsPerPage, activePage]);

    const plp = axios.create({
        baseURL: 'http://localhost:3000/'
    });

    const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam) => {
        const response = await plp.get('/apis/plp.json', {
            params: {
                facets: facetsParam,
                sort: sortParam,
                itemsPerPage: itemsPerPageParam,
                pageStartIndex: pageStartIndexParam
            }
        });

        setPlpResults(response.data);
    };

    return [plpResults, plpRequest];
};

export default usePlpResults;