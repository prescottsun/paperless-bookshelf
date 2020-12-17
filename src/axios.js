import axios from "axios";

const instance = axios.create({
	baseURL: "https://my-little-cors-proxy.herokuapp.com",
	ContentType: "application/xml; charset=utf-8",
});

export default instance;
