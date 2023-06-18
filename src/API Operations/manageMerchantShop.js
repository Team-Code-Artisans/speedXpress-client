import instance from "../axios";

// create merchant shop
export const createShop = async (shopData) => {
  try {
    const url = `/create-shop`;
    const response = await instance.post(url, shopData);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// get merchant shops

export const getShop = async (email) => {
  try {
    const response = await instance.get(`/shop?email=${email}`);
    const data = await response;
    return data;
    
  } catch (error) {
    console.log(error.message);
  }
};
