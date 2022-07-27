import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_POSTING } from '../utils/queries';




function HomeFeed() {

    const {loading, data } = useQuery(GET_POSTING);
    const postings = data?.postings || [];

  return (
    <div className='homefeed-container'>
        {postings.map((posting) =>(
            <div className='posting-container' key= {posting._id}>
                <p>{posting.cost}</p>
                <img src={posting.img} alt={posting.title}/>
                <h3 className='posting-header'>{posting.description}</h3>
            </div>
        ))}
    </div>
  )
}

export default HomeFeed