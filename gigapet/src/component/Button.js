import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
    
    const MyButton = styled.button`
        background-color: #FCCD04;
        color: white;
        margin: 20px auto;
        padding: 5px;
        border-radius: 10px;
        border: none;
        width: 120px;
        height: 40px;
        font-size: 1.2rem;
        font-family: 'Martel Sans', sans-serif;
        border: 5px solid #A64AC9;
        border: 1px solid #FFB48F;
        box-shadow:  -1px 1px orange,
             -1px 1px orange,
             -2px 2px orange,
             -3px 3px orange,
             -3px 3px orange;
    `
    return(
        <MyButton type='submit'>Submit</MyButton>
    )
}
