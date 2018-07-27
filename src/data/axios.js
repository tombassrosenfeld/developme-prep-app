import axios from "axios";

export const baseURL = 'https://resources.developme.training/';

// create a version of axios with useful defaults
export default axios.create({
    baseURL: baseURL,
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});