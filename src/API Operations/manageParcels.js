

// create a parcel 

import instance from "../axios";

export const createParcel = async (parcelData) => {

    try {
        const url = `/parcel`
        const response =await instance.post(url, parcelData);
        console.log(response)
        return response
    } catch (error) {
        console.log(error.message)
    }

}