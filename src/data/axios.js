import axios from "axios";

export const baseURL = process.env.REACT_APP_API_URL

// create a version of axios with useful defaults
export default axios.create({
    baseURL: baseURL,
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});