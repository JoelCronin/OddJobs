import React from "react";
import "../../styles/AccountStyles/My-Account.css";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';

import Auth from "../../utils/auth";


import profilePic from '../../img/profile-pic-large.png';
import profile17 from '../../img/profiles/profile17.svg';
import StarRating from "../StarRating";

function MyAccount() {

 const myId = useParams()
 const login = {"id": "62e2f1bbb398d467f85a6491"}

 const logout = (e) => {
    e.preventDefault();
    Auth.logout();
 }

    console.log(myId)
    console.log(login)

    const {loading, data} = useQuery (GET_ME);

    console.log(data)


    const mine = data?.me || [];

    console.log(mine)

    console.log(mine);

    return (
        <div className="my-account-outer-body">
            <div className="my-account-body">
                <div className="profile-and-signout">
                    <img className="my-account-profile-pic" src={profile17}/>
                    <div className="admin-signout-button">
                            <div onClick={logout}>Sign out</div>
                    </div>
                </div>

                <div className="my-account-form-box">
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Name </h1>
                        <div className="my-account-data-box">

                            <h1 className="my-account-form-data"> {mine.name}</h1>

                        </div>
                    </div>
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Email</h1>
                        <div className="my-account-data-box">
                            <h1 className="my-account-form-data">{mine.email}</h1>
                        </div>
                    </div>
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Password</h1>
                        <div className="my-account-data-box">
                            <h1 className="my-account-form-data">*****************************</h1>
                        </div>
                    </div>
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Rating</h1>
                        <div className="my-account-data-box">
                            <div className="my-account-star-rating">
                                <StarRating rating={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;

