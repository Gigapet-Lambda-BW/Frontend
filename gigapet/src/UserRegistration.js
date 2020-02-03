import React from 'react';
import './App.css';
import Button from './Button';

export default function UserRegistration() {



    return (
        <form className='signup'>
            <label>Email:</label>
            <input type='email' minLength='1' name='email'/>
            
            <label>Household Name:</label>
            <input type='text' minLength='1' name='householdName' />
            
            <label>Choose a Password:</label>
            <input type='password' minLength='6' name='password'/>
            
            <label>Confirm Password:</label>
            <input type='password' name='passwordConfirmed'/>
            
            <Button />
        </form>
    )
}