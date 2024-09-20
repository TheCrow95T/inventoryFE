import axios from "axios";
import { API_KEY, OPERATION_API_URL } from "../../config.js";
import getCookie from "../../utilities/getCookie.js";

export default async function createProduct(
  product_name,
  category_id,
  buying_price,
  selling_price,
) {
  try {
    const result = await axios({
      // Endpoint to send files
      url: OPERATION_API_URL + "/product",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "api-key": API_KEY,
        authorization: getCookie("accessToken"),
      },
      withCredentials: true,
      // Attaching the form data
      data: {
        product_name,
        category_id,
        buying_price,
        selling_price,
      },
    });
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return false;
}
