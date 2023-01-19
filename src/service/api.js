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
    return response.data;
  } catch (err) {
    console.log("errors while getting users", err.messsage);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("errors while getting setConversation Api", error.messsage);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("errors while getting getConversation Api", error.messsage);
  }
};

export const newMessage = async (data) => {
  try {
    axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("errors while getting newMessage Api", error.messsage);
  }
};

export const getMessages = async (conversationId) => {
  try {
    let response = await axios.get(`${url}/message/get/${conversationId}`);
    return response.data;
  } catch (err) {
    console.log("error while calling get message Api", err.message);
  }
};
