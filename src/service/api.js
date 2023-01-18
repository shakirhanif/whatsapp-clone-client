import axios from "axios";

const url = "http://localhost:3000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("error while addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("errors while getting users", err.messsage);
  }
};
