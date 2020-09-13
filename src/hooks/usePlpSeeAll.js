// TODO: delete after redux is working 

import { useState, useEffect } from 'react';

const usePlpSeeAll = (requestPath) => {

    const [seeAllResults, setSeeAllResults] = useState({});
    const baseURL = 'http://localhost:3000/'

    useEffect(() => {
        if (requestPath) {
            seeAllRequest(requestPath);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestPath]);

    const seeAllRequest = async (newRequestPath) => {
        try {
            let url = new URL(`${baseURL}${newRequestPath}`);
            let response = await fetch (url, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`There was an error loading the refinements. status: ${response.status}`);
            } else {
                let data = await response.json();
                setSeeAllResults(data);
            }
        } catch (error) {
            alert(`There was an error loading the refinements: ${error}`)
        }
    };

    return [seeAllResults, seeAllRequest];
};

export default usePlpSeeAll;