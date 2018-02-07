import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://resources.developme.box/wp-json/wp/v2", // TODO: Change this to live site...
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});