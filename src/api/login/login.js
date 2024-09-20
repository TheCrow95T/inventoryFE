import axios from "axios";
import { API_KEY, LOGIN_API_URL } from "../../config.js";

export default async function login(username, password) {
    try {
        const result = await axios({
            // Endpoint to send files
            url: LOGIN_API_URL,
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "api-key": API_KEY,
            },
            withCredentials: true,
            // Attaching the form data
            data: {
                username: username,
                password: password,
            },
        });

        if (result.data.data.general_accessibility) {
            return result.data.data;
        }

        console.log("failed");
    } catch (error) {
        console.error(error);
    }
    return false;
}
