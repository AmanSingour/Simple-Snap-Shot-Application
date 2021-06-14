import React from 'react'
import { Redirect, Route } from 'react-router-dom'

//? COMPONENT THAT TAKED GUARENTEE TO SECURE PRIVATE ROUTES
const PrivateRoute = ({component: Component, ...rest}) => {
    
    const {loggedIn} = useSelector(state => state.auth)

    return(
        //* COMPONENT WILL ONLY RENDER IF USER IS LOGGED IN
        //* USER WILL REDIRECTED TO LOGIN PAGE
        <Route 
            {...rest}
            render={(props) =>
                loggedIn ? 
                <Component {...props} />
                : <Redirect to={_routes.LOGIN} />
            }
        />
    )
}

export default PrivateRoute