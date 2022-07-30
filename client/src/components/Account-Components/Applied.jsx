import React from "react";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_ME } from '../../utils/queries';

import "../../styles/AccountStyles/Applied.css";
import active from '../../img/status/active.png';

function Applied() {

    const userID = useParams();

    console.log('Test')
    console.log(userID);

    const { loading, data } = useQuery(GET_ME, {
        variables: userID,
      });
      console.log(data);
      const userInfo = data?.me || {};

    if (loading) {
    return <div>Loading...</div>
    }

    console.log(userInfo)

    return (
        <div className="appliedContainer">
            <div className='job-box'>
              <h1 className='job-price'><span>$</span>20</h1>
              <img className='job-post-img' src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
              <div className='job-post-decription-box'>
                <div className='job-post-description-top'>
                  <h1 className='job-title'>Wash Dishes</h1>
                  <div className='status-box'>
                    <h1 className='status-main-post'>Status</h1>
                    <span>
                      <img className='status-symbol-main' src={active}/>
                    </span>
                  </div>
                </div>
                <div className='job-post-description-bottom'>
                <h1 className='job-post-owner'>Chris</h1>
                  <h1 className='job-post-date'>1hr ago</h1>
                </div>
              </div>
            </div>


            {(userInfo.jobApplications.length === 0) ? (<p>YOU DONT HAVE ANY JOBS</p>) : (
            
                userInfo.jobApplications.map((application) => {
                <div className='job-box'>
                    <h1 className='job-price'><span>$</span> {application.cost} </h1>
                    <img className='job-post-img' src="https://designshack.net/wp-content/uploads/placeholder-image.png"/>
                    <div className='job-post-decription-box'>
                    <div className='job-post-description-top'>
                        <h1 className='job-title'>{application.title}</h1>
                        <div className='status-box'>
                        <h1 className='status-main-post'>{application.status}</h1>
                        <span>
                            <img className='status-symbol-main' src={active}/>
                        </span>
                        </div>
                    </div>
                    <div className='job-post-description-bottom'>
                    <h1 className='job-post-owner'>Chris</h1>
                        <h1 className='job-post-date'>{application.createdAt}</h1>
                    </div>

                    </div>
                </div>
                })
            )}
        </div>
    );
}

export default Applied;