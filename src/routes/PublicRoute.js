import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { _routes } from '../utils'

//? COMPONENT THAT RETURNS ALL PUBLIC ROUTES
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    
    const {loggedIn} = useSelector(state => state.auth)

    return(
        //* COMPONENT WILL ONLY RENDER IF USER IS NOT LOGGED IN && NOT RESTRICTED
        //* IN THE CASE OF LOGOUT RESTRICTION WILL USE
        //* ELSE USER WILL REDIRECTED TO HOME PAGE
        <Route 
            {...rest}
            render={(props) =>
                loggedIn && restricted ? 
                <Redirect to={_routes.HOME} />
                : <Component {...props} />
            }
        />
    )
}

export default PublicRoute