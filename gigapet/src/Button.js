import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
    
    const MyButton = styled.button`
        background-color: #A64AC9;
        color: #F5E6CC;
        margin: 20px auto;
        padding: 5px;
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 40px;
        font-size: 1.5 rem;
        font-family: 'Martel Sans', sans-serif;
        border: 5px solid #A64AC9;
        border: 1px solid #FFB48F;
        box-shadow:  -1px 1px #FFB48F,
             -1px 1px #FFB48F,
             -2px 2px #FFB48F,
             -3px 3px #FFB48F,
             -3px 3px #FFB48F;
    `
    return(
        <MyButton type='submit'>Submit</MyButton>
    )
}
