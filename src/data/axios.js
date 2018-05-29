import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://resources.developme.training/",
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});