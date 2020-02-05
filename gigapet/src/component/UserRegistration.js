import React from 'react';
import './App.css';
import Button from '../Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

useEffect(() => {
    axios
        .get('https://gigapet-bw-7.herokuapp.com/api/auth/register')
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
},[]);

export default function UserRegistration() {

    const [user, setUser] = useState([])
    
    return (
        <form className='signup'>
            <label>Email Adress:
            <input type='email' minLength='1' name='email' onChange={() => setUser()}/>
            </label>

            <label>Household Name:
            <input type='text' minLength='1' name='householdName' />
            </label>

            <label>Choose a Password:
            <input type='password' minLength='6' name='password'/>
            </label>

            <label>Confirm Password:
            <input type='password' name='passwordConfirmed'/>
            </label>

            <Button />
        </form>
    )
}