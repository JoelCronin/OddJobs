import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {GET_SINGLE_POSTING} from '../utils/queries'

import Auth from "../utils/auth";
import { MdKeyboardReturn } from 'react-icons/md';

function SinglePosting() {

    const singlePostingId = useParams();

    const {loading, data} = useQuery (GET_SINGLE_POSTING, {
        variables: singlePostingId 
    });

    const singlepost = data?.singlePosting || [];

    // Apply for Position Functionallity
    const [hasApplied, setHasApplied] = useState(false);

    const ID = Auth.getProfile().data._id;

    const jobApplicationIDS = [1, 2, ID, 5];

    jobApplicationIDS.map((input) => {
      if(input == ID) {
        // console.log('Test');
        if(hasApplied == false) {
          setHasApplied(true)
        }
      }
    })

  return (
    <div style={{color: '#bdbdbd'}}>
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