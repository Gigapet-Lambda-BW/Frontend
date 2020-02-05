import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";


function Welcome(props) {
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(true);
    console.log(props)

    const toggle = e => {
        e.preventDefault()
        setLogin(!login)
        setSignup(!signup)
    }

    const reveal = {
        display: 'none'
    }

    return (
        <section className='welcome'>
            <h3>Teach your children the value of healthy eating.</h3>
            <div className="form">
                <div>
                    <button onClick={toggle} className='toggle left'>Login</button>
                    <button onClick={toggle} className='toggle right'>Signup</button>
                </div>
            </div>
            <div className='form'>
                <Signup signup={signup} setSignup={setSignup} login={login} setLogin={setLogin} toggle={toggle} reveal={reveal} history={props.history} />
                <Login login={login} setLogin={setLogin} toggle={toggle} reveal={reveal} history={props.history} />
            </div>

        </section>
    )
}

export default Welcome