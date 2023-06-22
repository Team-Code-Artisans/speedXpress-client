import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import BigSpinner from '../components/Spinners/BigSpinner';
import { getRole } from '../API Operations/manageUsers';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

const {user,loading} = useContext(AuthContext)
const [userRole,setUserRole]=useState()
    useEffect(()=>{
        getRole(user.email)
        .then(res => setUserRole(res))
    },[user])

  
    if(loading){
        return <BigSpinner></BigSpinner>
    }
    if (userRole){
        return children;
    }
    if(!userRole){
        <Navigate to='/login'></Navigate>
    }
}

export default PrivateRoute