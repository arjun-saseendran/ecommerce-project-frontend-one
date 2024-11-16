import axios from "axios";

const apiCall = async (url, method) => {
    const method = {
        get: method
    }
  try {
    const data = await axios.method.get(url);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};


export {apiCall}