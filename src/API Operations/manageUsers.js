

// ------------------------------------User -------------------------------------
// save user to db

import instance from "../axios";

export const saveUser = async (userData) => {
    try {
        const url = `/user/${userData.email}`;
        const res = await instance.put(url, userData);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
    }
};


// get role of a user

export const getRole = async (email) => {
    try {
        const url = `/user/${email}`;
        const res = await instance.get(url);
        console.log(res)
        let role = (res.account_type);
       
        return role;
    } catch (error) {
        console.log(error.message);
    }
}


// ------------------------------------CUSTOMER -------------------------------------

// save customers info

export const saveCustomer = async (customerData) => {
    console.log(customerData)
    try {
        const url = `/customer/${customerData.email}`;
        const res = await instance.put(url, customerData);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
    }
};





// save customers info

export const getMyCustomers = async (merchantEmail) => {
    console.log(merchantEmail)
    try {
        const url = `/customers/${merchantEmail}`;
        const res = await instance.get(url);
        const data = res.data
        return res;
    } catch (error) {
        console.log(error.message);
    }
};