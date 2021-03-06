import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute(props) {
    const {
        component: Component,
        ...rest
    } = props
    return(
        <Route {...rest} 
            render={renderProps => 
                localStorage.getItem('token') ? (
                    <Component {...renderProps} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}

export default ProtectedRoute