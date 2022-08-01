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
import {GET_SINGLE_POSTING} from '../utils/queries';

import Auth from '../utils/auth';

function UpdatePosting() {
  const [formState, setFormState] = useState ({
    title: '',
    description: '',
    cost: '',
  });

  const postId = useParams()

  console.log(postId)

  const [updatePosting] = useMutation(UPDATE_POSTING);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await updatePosting({
        variables: {
          ...postId, 
          input:{
            ...formState
          }
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const {loading, data} = useQuery (GET_SINGLE_POSTING, {
    variables: postId 
});

const singlepost = data?.singlePosting || [];

console.log(singlepost)

    return(
      <div className="adminBody">
          <div className="sidebar">
              <div className="sidebar-top">
                  <img className="navbar-logo" src={logosvg}/>
                  <span>OddJobs</span>
              </div>
              <div className="options">
                  <section className="selected-tab">Updating Post</section>
              </div>
          </div>
          <div className="header-and-component-container">
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
                      <input value={formState.title} name="title" onChange={handleChange} className="add-input-name" type="text" placeholder={singlepost.title}></input>
                    </div>
                    <div className="my-account-form">
                      <h1 className="my-acccount-form-title">Description</h1>
                      <textarea onChange={handleChange} value={formState.description} name="description" type="text" placeholder={singlepost.description} className="description-text-area"></textarea>
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
                          <input onChange={handleChange} type="text" name="cost" value={formState.cost} className="price-input"  placeholder={singlepost.cost}/>
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
                    <div className="listing-create-button" onClick={handleFormSubmit}>
                    <Link to = {`/me/${Auth.getProfile().data._id}`}> <div>Update</div>  </Link> 
                      </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default UpdatePosting;