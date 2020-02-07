import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import Login from './Login';
import GigapetLogo from '../img/GigapetLogo.png';

export default function Navigation () {

    return (
        <Router>
            <div className='navigation'>
                <img src={GigapetLogo} className='.logo' style={{width: '120px', height:'120px'}} />
                <Link className='link' to='/UserRegistration'>Sign Up</Link>
                <Link className='link' to='/Login'>Login</Link>

                <Route exact path='/UserRegistration' component={UserRegistration} />
                <Route exact path='/Login' component={Login} />
            </div>
        </Router>
    )
}