import axios from "axios";
import { API_KEY, OPERATION_API_URL } from "../../config.js";
import getCookie from "../../utilities/getCookie.js";

export default async function editCategories(categoryId,categoryName) {
    try {
        const result = await axios({
            // Endpoint to send files
            url: OPERATION_API_URL + "/category",
            method: "PUT",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "api-key": API_KEY,
                authorization: getCookie("accessToken"),
            },
            withCredentials: true,
            // Attaching the form data
            data: {
                category_id: categoryId,
                category_name: categoryName
            },
        });
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.error(error);
    }
    return false;
}
