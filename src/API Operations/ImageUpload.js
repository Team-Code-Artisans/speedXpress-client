import axios from "axios";

export const getImageUrl = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=d7a108eaed4639a0e0ad7210382cfce1`;
    const response = await axios.post(url, formData);
    const data = await response.data;
    return data.data.display_url;
  } catch (error) {
    console.log(error);
  }
};
