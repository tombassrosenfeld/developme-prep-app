import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://resources.developme.one/",
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});