import React from 'react'



function HomeFeed({postings}) {
  return (
    <div className='homefeed-container'>
        {postings.map((posting) =>(
            <div className='posting-container' key= {posting._id}>
                <p>{posting.cost}</p>
                <img src={posting.img}/>
                <h3 className='posting-header'>{posting.description}</h3>
            </div>
        ))}
    </div>
  )
}

export default HomeFeed