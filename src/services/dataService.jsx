import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data[0];
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token"); // Mengambil token seperti pada logoutService
    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: "Gagal mengambil data expenses" };
  }
};

export const billService = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`https://jwt-auth-eight-neon.vercel.app/bills`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: "Gagal mengambil data bills" };
  }
};