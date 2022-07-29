import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {GET_SINGLE_POSTING} from '../utils/queries'

function SinglePosting() {

    const singlePostingId = useParams();

    console.log(singlePostingId)

    const {loading, data} = useQuery (GET_SINGLE_POSTING, {
        variables: singlePostingId 
    });

    console.log(data)

    const singlepost = data?.singlePosting || [];

  return (
    <div>
        <p>{singlepost.title}</p>
        <p>${singlepost.cost}</p>
        <p>{singlepost.description}</p>
        <p>Status: {singlepost.status}</p>
        <p>{singlepost.createdAt}</p>
        <img src={singlepost.image} alt={singlepost.title}/>
        <h1>APPLY FOR POSTING</h1>
    </div>

  )
}

export default SinglePosting