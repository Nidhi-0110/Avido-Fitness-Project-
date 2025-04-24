import axios from "axios";

const CONTACT_API = "http://localhost:3000/Contact_users";
const PERSONAL_DETAILS_API = "http://localhost:3000/PersonalDetails_data";

const getContactUser = async () => {
  try {
    const response = await axios.get(CONTACT_API);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postContactUser = async (obj) => {
  try {
    await axios.post(CONTACT_API, obj);
  } catch (error) {
    console.log(error);
  }
};

const getPersonalDetails = async () => {
  try {
    const response = await axios.get(PERSONAL_DETAILS_API);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postPersonalDetails = async (obj) => {
  try {
    await axios.post(PERSONAL_DETAILS_API, obj);
  } catch (error) {
    console.log(error);
  }
};

export {
  getContactUser,
  postContactUser,
  postPersonalDetails,
  getPersonalDetails,
};
