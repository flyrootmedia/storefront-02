import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlpSeeAll = (requestPath) => {

    const [seeAllResults, setSeeAllResults] = useState({});

    const seeAll = axios.create({
        baseURL: 'http://localhost:3000/'
    });

    useEffect(() => {
        if (requestPath) {
            seeAllRequest(requestPath);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestPath]);

    const seeAllRequest = async (newRequestPath) => {
        await seeAll
            .get(newRequestPath)
            .then(response => {
                setSeeAllResults(response.data);
            })
            .catch( error => {
                alert(`There was an error loading the refinements: ${error}`);
            });
    };

    return [seeAllResults, seeAllRequest];
};

export default usePlpSeeAll;