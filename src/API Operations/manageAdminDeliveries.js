import instance from "../axios";

// get all deliveries for admin
export const getAllDeliveries = async () => {
  try {
    const response = await instance.get(`/all-parcels`);
    const data = await response;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// update delivery status
export const updateStatus = async (parcelId, updatedStatus) => {
  try {
    // console.log(parcelId)
    const url = `/update-status`;
    const response = await instance.patch(url, { parcelId, updatedStatus });
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
