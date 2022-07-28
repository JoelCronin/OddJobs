import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_POSTING } from '../utils/queries';
import { Link } from 'react-router-dom';

function HomeFeed() {

    const {loading, data } = useQuery(GET_POSTING);
    const postings = data?.posting || [];

  return (
    <div className='homefeed-container'>

        {postings.map((posting) => (
            <Link to= {`/posting/${posting._id}`}>
                <div className='posting-container' key= {posting.title}>
                    <p>${posting.cost}</p>
                    <img src={posting.image} alt={posting.title}/>
                    <h3 className='posting-header'>{posting.title}</h3>            
                    <p>Status: {posting.status}  </p>
                    <p>{posting.createdAt}</p>
                    <Link to= {`/user/${posting.owner._id}`}><p>{posting.owner.name}</p></Link> 
                </div> 
            </Link>  
        ))}
    </div>
  )
}

export default HomeFeed