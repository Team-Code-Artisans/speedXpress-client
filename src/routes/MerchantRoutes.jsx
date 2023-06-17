import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import BigSpinner from '../components/Spinners/BigSpinner';

const MerchantRoutes = ({ children }) => {

    const { user } = useContext(AuthContext)

    if (user) {
        return children;
    } else {
        return <BigSpinner />
    }
}

export default MerchantRoutes