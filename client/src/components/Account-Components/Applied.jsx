import React from "react";
import "../../styles/Applied.css";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_ME } from '../../utils/queries';

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
        <div id="appliedContainer">
            <div id="appliedHeader" className="flex">
                <h1 id="appliedHeaderAccountItem">Applied</h1>
                <h1 id="appliedHeaderHomeItem">Home</h1>
            </div>

            {(userInfo.jobApplicatoins == null) ? (<p>YOU DONT HAVE ANY JOBS</p>) : (
            <div id="appliedCardContainer" className="flex">
                <div className="appliedCard flex">
                    <h3>Cost Placeholder</h3>
                    <h3>Edit Button Placeholder</h3>
                    <img src="https://via.placeholder.com/200" alt="Job"/>
                    <h3>Desciption Placeholder</h3>
                    <h3>Status Placeholder</h3>
                    <h3>Name Placeholder</h3>
                    <h3>Date Placeholder</h3>
                </div>
            </div>
            )}
        </div>
    );
}

export default Applied;