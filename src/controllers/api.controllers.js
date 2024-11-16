import axios from "axios";

const apiCall = async (url, method, data = null, headers = {}) => {
  try {
    const response = await axios({ url, method, data, headers });

    return [response.data, null];
  } catch (error) {
    return [null, error.response || error];
  }
};

export { apiCall };
