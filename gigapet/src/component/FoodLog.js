import React from 'react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { axiosWithAuth } from "../axiosAuth"

export default function FoodLog() {

    const [ dailyFood, addDailyFood ] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        addDailyFood(event.target.dailyFoodInput.value)

    }

    return (
    <Formik>
        <Form onSubmit={event => handleSubmit(event)}>
            <input type='text' placeholder='What did you eat today?' id='dailyFoodInput' ></input>
            <button>Save</button>
            
            <ul>{dailyFood[0]}</ul>

        </Form> 
    </Formik>    
    )
}