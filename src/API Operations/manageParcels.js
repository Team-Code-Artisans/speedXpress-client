import instance from "../axios";

// create a parcel

export const createParcel = async (parcelData) => {
  try {
    const url = `/parcel`;
    const response = await instance.post(url, parcelData);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// get parcels for merchant

export const getParcels = async (email) => {
  try {
    const response = await instance.get(`/parcels?email=${email}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
