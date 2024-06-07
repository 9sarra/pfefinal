import axios from "axios";
const serverUri = "http://localhost:5001";
export const register = async (data) => {
  const response = await axios.post(
    serverUri + "/api/users/register",
    {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", localStorage.data.user);
  return response.data;
};
