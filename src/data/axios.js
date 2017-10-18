import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://developme.box/wp-json/wp/v2",

    // use your own key
    // params: {"key": "4fdea06a65ba1491091c0db709faf0cce944067a"},
    
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});