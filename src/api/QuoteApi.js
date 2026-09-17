import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getRandomQuote = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    throw error;
  }
};