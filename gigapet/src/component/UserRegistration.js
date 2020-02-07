import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';


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


    const [user, setUser] = useState({
        email: '',
        householdName: '',
        password: '',
        passwordConfirmed: '',
    });

    const handleChange = (event) => {
        setUser(event.target.value)
    }

    return (
        <Formik 
            validate={validate} 
            initialValues={{
                email: "",
                householdName: "",
                password: "",
                passwordConfirmed: "",
            }} 
            render={() => {
                return (
                    <Form className='form'>
                            <h2>Register</h2>
                            
                            <Field className='field' type='email' placeholder='Email' name='email' onChange={handleChange}/>

                            <Field className='field' type='text' placeholder='Household Name' name='householdName' onChange={handleChange} />

                            <Field className='field' type='password' placeholder='Password' name='password' onChange={handleChange}/>

                            <Field className='field' type='password' placeholder='Confirm password' name='passwordConfirmed' onChange={handleChange}/>


                    <Button />
                </Form>
            )
        }}
        
        />
    )
}