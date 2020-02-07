import React from 'react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import Button from './Button';

export default function FoodLog(props) {

    return (
    <Formik>
        <Form onSubmit={event => props.handleSubmit(event)} className='form'>
            <p className='foodLog'>{props.date}</p>
            <input className='field' type='text' placeholder='What did you eat today?' id='dailyFoodInput' ></input>
            <Button />
            <div>
                {props.dailyFood.map(foodItem => <p>{foodItem}</p>)}
            </div>
        
        </Form> 
    </Formik>    
    )
}