import React from 'react'
import AdminNav from '../../pages/AdminDashboard/AdminNav'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    )
}

export default AdminDashboard