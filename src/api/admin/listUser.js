import axios from "axios";
import { API_KEY, ADMIN_URL_API_URL } from "../../config.js";
import getCookie from "../../utilities/getCookie.js";

export default async function listUser() {
  try {
    const result = await axios({
      // Endpoint to send files
      url: ADMIN_URL_API_URL + "/user",
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "api-key": API_KEY,
        authorization: getCookie("accessToken"),
      },
      withCredentials: true,
    });

    return Object.values(result.data);
  } catch (error) {
    console.error(error);
  }
  return false;
}
