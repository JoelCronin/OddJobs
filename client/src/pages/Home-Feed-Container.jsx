import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_POSTING, GET_ME } from '../utils/queries';
import { QUERY_THOUGHTS } from '../utils/queries';

import HomeFeed from "../pages/HomeFeed"

function HomeFeedContainer() {

    const {loading, data } = useQuery(GET_POSTING);
    const postings = data?.posting || [];


    return(
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <HomeFeed 
                posts={postings}
                />
            )}

        </div>
    )
}

export default HomeFeedContainer;