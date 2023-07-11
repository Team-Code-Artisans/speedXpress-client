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
// get single spacific parcel form Database by its ID 

export const getSingleParcel = async (id) => {
  try {
    const response = await instance.get(`/singleParcel?id=${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
// get parcels for delivery by distrcit and status

export const getDeliveryParcels = async (district) => {
  try {
    // console.log(district)
    const url=`/parcels/${district}?status=accepted`
    const response = await instance.get(url);
    // console.log("accepted by admin",response)
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getIntransitParcels = async (district) => {
  try {
    // console.log(district)
    const url=`/parcels/${district}?status=in-transit`
    const response = await instance.get(url);
    console.log("accepted by employee",response)
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getCompletedParcels = async (district) => {
  try {
    // console.log(district)
    const url=`/parcels/${district}?status=complete`
    const response = await instance.get(url);
    // console.log("Completed by employee",response)
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const getReturnedParcels = async (district) => {
  try {
    // console.log(district)
    const url=`/parcels/${district}?status=return`
    const response = await instance.get(url);
    // console.log("Completed by employee",response)
    return response;
  } catch (error) {
    console.log(error.message);
  }
};


// get all parcel

export const getAllReturnedParcels = async () => {
  try {
   
    const url=`returned-parcels`
    const response = await instance.get(url);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

