import React from 'react';
import { Form, Formik } from 'formik';
import { useState } from 'react';

export default function FoodLog() {

    const [ dailyFood, addDailyFood ] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        addDailyFood(event.target.value)

    }

    console.log(dailyFood)

    return (
    <Formik>
        <Form onSubmit={event => handleSubmit(event)}>
            <input type='text' placeholder='What did you eat today?' name='dailyFoodInput' ></input>
            <button>Save</button>
            


        </Form> 
    </Formik>    
    )
}