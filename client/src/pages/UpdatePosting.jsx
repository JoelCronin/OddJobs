import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UPDATE_POSTING } from "../utils/mutations";
import { GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png'
import { TbCloudUpload } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

// import Auth from '../utils/auth';

function UpdatePosting() {
    const [updateName, setUpdateName] = useState('')
    const [updateDesc, setUpdateDesc] = useState('')
    const [updateCost, setUpdateCost] = useState('');
    // const [addComment, { error }] = useMutation

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'updateName') {
            setUpdateName(inputValue);
          } else if (inputType === 'updateDesc') {
            setUpdateDesc(inputValue);
          } else if (inputType === 'updateCost') {
            setUpdateCost(inputValue);
          }
    }

    console.log('Before userID')
    const userID = useParams();

    const { loading, data } = useQuery(GET_ME, {
        variables: userID,
      });
      console.log(data);
      const userInfo = data?.me || {};

    const [updatePosting, { error }] = useMutation(UPDATE_POSTING);

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(updateName);
        console.log(updateCost);
        console.log(updateDesc);
        console.log(userInfo.name);


        try {
            const { data } = await updatePosting({
                variables: { 
                    id: "WILL NEED THE PARAMS ONCE IN",
                    input: 
                 {   title: updateName,
                    cost: updateCost,
                    description: updateDesc,}
                },
            });

            setUpdateName('');
            setUpdateDesc('');
            setUpdateCost('');

            toast.success('Job posting updated!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

        } catch (err) {

          console.error(err);
          toast.error('Error, please try again', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    }

    console.log(userInfo);

    const sidebarVariant = {
        hidden:{
          x: -800
        },
        visible:{
          x: 0,
          transition: {
            duration: 0.5
          }
        }
    }

    const componentVariant = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.45
            }
        }
    }

    return(
      
      <div className="adminBody">
          <motion.div variants={sidebarVariant} initial="hidden" animate="visible" className="sidebar">
              <div className="sidebar-top">
                  <img className="navbar-logo" src={logosvg}/>
                  
                  <span>OddJobs</span>
              </div>
              <div className="options">
                  <section className="selected-tab">Updating Post</section>
              </div>
          </motion.div>
          <motion.div variants={componentVariant} initial="hidden" animate="visible" className="header-and-component-container">
            <header className="admin-main-header">
              <h1 className="admin-title">Updating Post</h1>
              <div className="admin-back-button" >
                  <Link to={`/home`} style={{ textDecoration: 'none', color:'#64FFDB' }}> <div>Home</div> </Link>
              </div>
            </header>

            <div className="form-and-buttons-container">
              <div className="form-container">
                <div className="form-background">
                  <div className="form-left">
                    <div className="my-account-form">
                      <h1 className="my-acccount-form-title">Name</h1>
                      <input value={updateName} name="updateName" onChange={handleInputChange} className="add-input-name" type="text" placeholder="Enter name...."></input>
                    </div>
                    <div className="my-account-form">
                      <h1 className="my-acccount-form-title">Description</h1>
                      <textarea onChange={handleInputChange} value={updateDesc} name="updateDesc" type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elim ad minim veniam, quis nostrud exercitation ullamco labo" className="description-text-area"></textarea>
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="upload-pic-box">
                      <div className="upload-components-box">
                        <TbCloudUpload className="upload-file-logo"/>
                        <h1 className="upload-file-title">Select a file or drag and drop here</h1>
                        <h1 className="upload-file-specifics">JPG, PNG, or PDF, file size no more than 10MB</h1>
                        <div className="upload-button-container">
                          <input type="file" name="upload-file-button" className="upload-file-button" />
                        </div>
                      </div>
                    </div>
                    <div className="status-and-price-container">
                      <div className="status-container">
                        <h1 className="status-title">Status</h1>
                        <div className="status-icon-and-dropdown">
                          <img className="status-icon-for-dropdown" src={active}/>
                          <select className="status-dropdown-list" name="status-dropdown-list">
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </div>
                      <div className="price-container">
                        <h1 className="price-title">Price</h1>
                        <div className="price-input-container">
                          <span className="input-dollar-sign">$</span>
                          <input onChange={handleInputChange} type="text" name="updateCost" value={updateCost} className="price-input"  placeholder="30" type="number"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-container">
                <div className="inner-button-container">
                  <div className="inner-inner-button-container">
                      <div className="listing-delete-button">
                        <div>Delete</div>
                      </div>
                  </div>
                  <div className="inner-inner-button-container">
                      <div className="listing-cancel-button">
                        <div>Cancel</div>
                      </div>
                  </div>
                  <div className="inner-inner-button-container">
                      <div className="listing-create-button" onClick={handleSubmit}>
                        <div>Update</div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    
    );
}

export default UpdatePosting;
