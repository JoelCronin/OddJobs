import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UPDATE_POSTING } from "../utils/mutations";
import { GET_ME } from '../utils/queries';

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

        } catch (err) {
            console.error(err);
          }
    }



      console.log(userInfo);

    return(
        <div>
          <label>Title</label>
            <input
            value = {updateName}
            name="updateName"
            type = "text"
            onChange={handleInputChange}
            ></input>
            <label>Description</label>
            <textarea
            value = {updateDesc}
            name="updateDesc"
            type = "text"
            onChange={handleInputChange}
            ></textarea>
            <label>Cost</label>
            <input
            value = {updateCost}
            name="updateCost"
            type = "text"
            onChange={handleInputChange}
            ></input>

            <button onClick={handleSubmit}>SUBMIT</button>

        </div>
    );
}

export default UpdatePosting;