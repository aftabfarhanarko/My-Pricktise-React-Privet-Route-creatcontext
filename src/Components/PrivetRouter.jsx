import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {users} = use(AuthContext);
    const location = useLocation()
    console.log(location)
    
    if(users){
        return children;
    }
    return <Navigate state={location.pathname} to="/signin"></Navigate>

};

export default PrivetRouter;