import React, { useState } from 'react';
import { Form, Formik } from 'formik';


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
            
            <ul>{dailyFood}</ul>

        </Form> 
    </Formik>    
    )
}