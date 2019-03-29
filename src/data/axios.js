import axios from "axios";
import { url } from '../env.js';

export const baseURL = url.base_url[url.app_env];

// create a version of axios with useful defaults
export default axios.create({
    baseURL: baseURL,
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});