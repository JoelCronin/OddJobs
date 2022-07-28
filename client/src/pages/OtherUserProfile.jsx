import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {GET_SINGLE_USER} from '../utils/queries'

function OtherUserProfile() {

    const singleUserId = useParams();

    console.log(singleUserId)

    const {loading, data} = useQuery (GET_SINGLE_USER, {
        variables: singleUserId
    });

    console.log(data)

    const singleOtherUser = data?.singleUser || [];

  return (
    <div className='other-user-container'>
        <div className='other-user-header'>
            <h3>NAME  {singleOtherUser.name}</h3>
        </div>
        <div className='other-user-body'>
            <p>RATING</p>
            <img src='WILL BE ADDED LATER' alt='WILL BE ADDED LATER'/>
            {/* WOuld be cool if we could have the completed jobs all showing on a carousel/scrollable something */}
            {/* Lets see if we have enough time */}
            <p>COMPLETED JOBS</p>
        </div>

    </div>
  )
}

export default OtherUserProfile