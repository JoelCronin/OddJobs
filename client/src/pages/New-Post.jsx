import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import { CREATE_POSTING } from "../utils/mutations";
// import { GET_ME } from '../utils/queries';
import logosvg from '../img/Logo.svg'
import active from '../img/status/active.png'
import { TbCloudUpload } from 'react-icons/tb';
// import Auth from '../utils/auth';

function NewPost() {
  
  
  const [formState, setFormState] = useState ({
    title: '',
    description: '',
    cost: '',
    image: 'https://designshack.net/wp-content/uploads/placeholder-image.png',
  });


  const [addPosting] = useMutation(CREATE_POSTING);

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
      const { data } = await addPosting({
        variables: { 
          input:{
            ...formState
          }
        },
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (

    <div className="adminBody">
        <div className="sidebar">
            <div className="sidebar-top">
                <img className="navbar-logo" src={logosvg}/>
                
                <span>OddJobs</span>
            </div>
            <div className="options">
                <section className="selected-tab">Add Post</section>
            </div>
        </div>
        <div className="header-and-component-container">
          <header className="admin-main-header">
            <h1 className="admin-title">Add Post</h1>
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
                    <input className="add-input-name" type="text" placeholder="Enter name...." name= "title" value={formState.title} onChange={handleChange}></input>
                  </div>
                  <div className="my-account-form">
                    <h1 className="my-acccount-form-title">Description</h1>
                    <textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboriquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elim ad minim veniam, quis nostrud exercitation ullamco labo" className="description-text-area" name= "description" value={formState.description} onChange={handleChange}></textarea>
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
                        <input className="price-input"  placeholder="30" type="number" name= "cost" value={formState.cost} onChange={handleChange}/>
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
                    <div onClick={handleFormSubmit} className="listing-create-button">
                       <div>Create</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}



export default NewPost;