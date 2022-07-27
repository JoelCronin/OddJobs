import React from 'react'

function OtherUserProfile() {
  return (
    <div className='other-user-container'>
        <div className='other-user-header'>
            <h3>NAME</h3>
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