import instance from "../axios";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthProvider";

// const { user } = useContext(AuthContext)

// create a parcel 

export const createParcel = async (parcelData) => {

    try {
        const url = `/parcel`
        const response = await instance.post(url, parcelData);
        console.log(response)
        return response
    } catch (error) {
        console.log(error.message)
    }

}

// get parcels for merchant

export const getParcels = async (email) => {
    try {
        const response = await instance.get(`/parcels?email=${email}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error.message)
    }
}