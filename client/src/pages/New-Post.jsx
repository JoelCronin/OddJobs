import React, { useState } from 'react'
import { useMutation } from '@apollo/client';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CREATE_POSTING } from "../utils/mutations";
import { GET_ME } from '../utils/queries';

// import Auth from '../utils/auth';

function NewPost() {
    const [postName, setPostName] = useState('')
    const [postDesc, setPostDesc] = useState('')
    const [postCost, setPostCost] = useState('');
    // const [addComment, { error }] = useMutation

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'postName') {
            setPostName(inputValue);
          } else if (inputType === 'postDesc') {
            setPostDesc(inputValue);
          } else if (inputType === 'postCost') {
            setPostCost(inputValue);
          }
    }

    console.log('Before userID')
    const userID = useParams();

    const { loading, data } = useQuery(GET_ME, {
        variables: userID,
      });
      console.log(data);
      const userInfo = data?.me || {};

    const [createPost, { error }] = useMutation(CREATE_POSTING);

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(postName);
        console.log(postCost);
        console.log(postDesc);
        console.log(userInfo.name);


        try {
            const { data } = await createPost({
                variables: {
                    owner: userInfo.name, 
                    title: postName,
                    cost: postCost,
                    description: postDesc,
                    status: 'New',
                },
            });

            setPostName('');
            setPostDesc('');
            setPostCost('');

        } catch (err) {
            console.error(err);
          }
    }



      console.log(userInfo);

    return(
        <div>
            <input
            value = {postName}
            name="postName"
            type = "text"
            onChange={handleInputChange}
            ></input>
            <textarea
            value = {postDesc}
            name="postDesc"
            type = "text"
            onChange={handleInputChange}
            >Description</textarea>
            <input
            value = {postCost}
            name="postCost"
            type = "text"
            onChange={handleInputChange}
            ></input>

            <button onClick={handleSubmit}>SUBMIT</button>

        </div>
    );
}

export default NewPost;