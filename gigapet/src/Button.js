import React from 'react';
import styled from 'styled-components';

export default function Button() {
    
    const myButton = styled.button`
        background-color: #A64AC9;
        color: #F5E6CC;
        margin: 10px auto;
        padding: 5px;
        border-radius: 10px;
        border: none;
        width: 35%;
        height: 30px;
        font-family: 'Martel Sans', sans-serif;
    `
    return(
        <myButton type='submit'>Submit</myButton>
    )
}
