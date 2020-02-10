import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { fetchFoodItem, addFoodItem, updateFoodItem } from '../actions/foodActions'
import { connect } from 'react-redux'

const FoodLog = props => {
    const [ name, setName ] = useState('');

    const handleNameChanges = e => {
        setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addFoodItem(name)
        setName('')
    }

    return (
    <Formik>
        <Form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} placeholder='What did you eat today?' onChange={handleNameChanges} ></input>
            <button>Submit</button>
        </Form> 
    </Formik>    
    )
}

const mapDispatchToProps = {
    addFoodItem,
    fetchFoodItem
}

export default connect(null, mapDispatchToProps)(FoodLog)