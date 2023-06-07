

// dealing with tokens in client side

import instance from "../axios";



export const setAuthToken = (user) => {

    // console.log(user)
    instance.get(`/jwt?email=${user?.email}`)
        .then(data => {
            // console.log(data)
            let accessToken = (data?.token);
            // console.log(accessToken)
            // save to LS
            localStorage.setItem('speedXpress-token', accessToken)
        })
}


//to set token every time user sign in or sign up