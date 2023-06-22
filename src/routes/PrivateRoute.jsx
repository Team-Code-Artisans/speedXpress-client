import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import BigSpinner from '../components/Spinners/BigSpinner';
import { getRole } from '../API Operations/manageUsers';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

const {user,loading} = useContext(AuthContext)
const [userRole,setUserRole]=useState()
const [serverLoad,setServerLoad]=useState(true)
    useEffect(()=>{
        getRole(user?.email)
        .then(res => {
            setUserRole(res)
            setServerLoad(false)
        })
       
    },[user])

  
    if(loading || serverLoad){
        return <BigSpinner></BigSpinner>
    }else if(userRole){
        return children;
    }else if(!userRole){
        <Navigate to='/login'></Navigate>
    }
}

export default PrivateRoute