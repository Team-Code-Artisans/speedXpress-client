import instance from "../axios";

// create merchant shop
export const createShop = async (shopData) => {
  try {
    const url = `/create-shop`;
    const response = await instance.post(url, shopData);
    // console.log(response);
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

// edit shop info
export const editShop = async (shopId, updatedData) => {
  try {
    const url = `/update-shop`;
    const res = await instance.patch(url, { shopId, updatedData });
    //console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

// edit shop info
export const deleteShop = async (shopId) => {
  try {
    const url = `/delete-shop`;
    const res = await instance.delete(url, { data: { shopId } });
    //console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
