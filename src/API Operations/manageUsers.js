

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


