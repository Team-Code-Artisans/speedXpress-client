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

// create merchant shop
// export const createShop = async (shopData) => {
//    try {
//      const url = `/create-shop`;
//      const response = await instance.post(url, shopData);
//      console.log(response);
//      return response;
//    } catch (error) {
//      console.log(error.message);
//    }
//  };
