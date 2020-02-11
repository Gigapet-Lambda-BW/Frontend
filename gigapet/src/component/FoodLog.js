import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { fetchFoodItem, addFoodItem, deleteFoodItem } from '../actions/foodActions'
import { connect } from 'react-redux'

const FoodLog = props => {
    const [ name, setName ] = useState('');

    const handleChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addFoodItem(name)
        setName('')
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} placeholder='What did you eat today?' onChange={handleChange} ></input>
            <button>Submit</button>
        </form> 
    </div>    
    )
}

const mapDispatchToProps = {
    addFoodItem,
    fetchFoodItem,
    deleteFoodItem
}

export default connect(null, mapDispatchToProps)(FoodLog)