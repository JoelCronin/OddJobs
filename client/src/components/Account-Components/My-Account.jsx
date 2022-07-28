import React from "react";
import "../../styles/AccountStyles/My-Account.css";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';

import profilePic from '../../img/profile-pic-large.png';

function MyAccount() {

    const login = {"id": "62e2f1bbb398d467f85a6491"}

    console.log(login)

    // const myId = useParams();

    const {loading, data} = useQuery(GET_ME, {
        variables: login
    });

    console.log(data)

    const mine = data?.me || [];

    console.log(mine)

    return (
        <div className="my-account-outer-body">
            <div className="my-account-body">
                <div className="profile-and-signout">
                    <img className="my-account-profile-pic" src={profilePic}/>
                    <div className="admin-signout-button">
                            <div>Sign out</div>
                    </div>
                </div>

                <div className="my-account-form-box">
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Name </h1>
                        <div className="my-account-data-box">
                            <h1 className="my-account-form-data">Dave Johnson ddd {mine.name}</h1>
                        </div>
                    </div>
                    <div className="my-account-form">
                        <h1 className="my-acccount-form-title">Email</h1>
                        <div className="my-account-data-box">
                            <h1 className="my-account-form-data">davejohnson76655@gmail.com</h1>
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
                            <h1 className="my-account-form-data"></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;

