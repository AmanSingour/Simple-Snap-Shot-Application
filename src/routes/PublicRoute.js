import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

//? COMPONENT THAT RETURNS ALL PUBLIC ROUTES
const PublicPrivateRoute = ({component: Component, restricted, ...rest}) => {
    
    const {loggedIn} = useSelector(state => state.auth)

    return(
        //* COMPONENT WILL ONLY RENDER IF USER IS NOT LOGGED IN && NOT Restricted
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

export default PublicPrivateRoute