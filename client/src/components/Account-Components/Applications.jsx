import React from "react";
import "../../styles/Applications.css";
import active from '../../img/status/active.png';

import profile65 from '../../img/profiles/2.svg'
import StarRating from "../StarRating";
import { motion } from 'framer-motion';


function Applications() {

    const componentVariant = {
        hidden:{
            y: 200
        },
        visible:{
            y: 0,
            transition: {
            duration: 0.3
            }
        }
    }
      
    return (
        <motion.div variants={componentVariant} initial="hidden" animate="visible" className="applicationsContainer">
            <div className="inner-applications-container">
                <div className="job-detail-container">
                    <h1 className="applications-job-title">Watier/Watresses</h1>
                    <div className="applications-status-box">
                        <h1 className="applications-status-title">Status</h1>
                        <img src={active} className="applications-status-icon"/>
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
            </div>
            <div className="inner-applications-container">
                <div className="job-detail-container">
                    <h1 className="applications-job-title">Watier/Watresses</h1>
                    <div className="applications-status-box">
                        <h1 className="applications-status-title">Status</h1>
                        <img src={active} className="applications-status-icon" alt="icon"/>
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
            </div>
            <div className="inner-applications-container">
                <div className="job-detail-container">
                    <h1 className="applications-job-title">Watier/Watresses</h1>
                    <div className="applications-status-box">
                        <h1 className="applications-status-title">Status</h1>
                        <img src={active} className="applications-status-icon" alt="icon"/>
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
            </div>
            <div className="inner-applications-container">
                <div className="job-detail-container">
                    <h1 className="applications-job-title">Watier/Watresses</h1>
                    <div className="applications-status-box">
                        <h1 className="applications-status-title">Status</h1>
                        <img src={active} className="applications-status-icon"/>
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
            </div>
            <div className="inner-applications-container">
                <div className="job-detail-container">
                    <h1 className="applications-job-title">Watier/Watresses</h1>
                    <div className="applications-status-box">
                        <h1 className="applications-status-title">Status</h1>
                        <img src={active} className="applications-status-icon"/>
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
                <div className="job-applicants-container">
                    <div className="username-and-pic-container">
                        <img src={profile65} className="job-applicant-profile-pic" alt="icon"/>
                        <h1 className="job-applicant-name">Dave Johnson</h1>
                    </div>
                    <div className="rating-container">
                        <StarRating rating={5} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Applications;