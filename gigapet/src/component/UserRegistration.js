import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
// import { getToken } from "../axiosAuth"
import axios from 'axios'

const validate = ({email, householdName, password, passwordConfirmed}) => {
    const errors = {};

    //validating email
    if (!email) {
        errors.email = "Please enter your email"
    } else if (email.length < 2) {
        errors.email = 'The email you entered is invalid'
    }
    //validating household name
    if (!householdName) {
        errors.householdName = "Please enter a name for your household"
    } else if (householdName.length < 2) {
        errors.householdName = 'The household name you entered is invalid'
    }
    //validating password
    if (!password) {
        errors.password = "Please enter a password"
    } else if (password.length < 2) {
        errors.password = "The password you entered is invalid"
    }
    //validating confirmed password
    if (!passwordConfirmed) {
        errors.passwordConfirmed = "Please confirm your password"
    } else if (passwordConfirmed !== password) {
        errors.passwordConfirmed = "Passwords do not match"
    }

    return errors;
}

export default function UserRegistration() {
    const [data, setData] = useState()
    const [user, setUser] = useState({
        username: '',
        // householdName: '',
        password: '',
        // passwordConfirmed: '',
    });

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        console.log(user)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post('https://gigapet-bw-7.herokuapp.com/api/auth/register', user)
            .then(result => {
                // setData({
                //     password: '',
                //     username: ''
                // })
                console.log(result)
                // props.setSignup(!props.signup)
                // props.setLogin(!props.login)
            })
            .catch(err => {
                throw (err)
            })
    }

    return (
        <div className="signup" validate={validate}>
            
        {console.log(user)}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                Username:
                <input className='field'
                    type="text"
                    name="username"
                    onChange={event => handleChange(event)}
                />
                </label>
                <label>
                Password:
                <input className='field'
                    type="text"
                    name="password"
                    onChange={event => handleChange(event)}
                />
                </label>
                <button>Submit</button>
            </form>
        </div>
        // <Formik 
        //     validate={validate} 
        //     initialValues={{
        //         username: "",
        //         // householdName: "",
        //         password: "",
        //         // passwordConfirmed: "",
        //     }} 
        //     render={() => {
        //         return (
        //             <div className='signup'>

        //                     <input className='field' type='text' placeholder='Username' name='username' onChange={handleChange} value={user.username}/>

        //                     {/* <input className='field' type='text' placeholder='Household Name' name='householdName' onChange={handleChange} /> */}

        //                     <input className='field' type='password' placeholder='Password' name='password' onChange={handleChange} value={user.password}/>

        //                     {/* <input className='field' type='password' placeholder='Confirm password' name='passwordConfirmed' onChange={handleChange}/> */}


        //             <Button onClick={handleSubmit}/>
        //         </div>
        //     )
        // }}
        
        // />
    )
}