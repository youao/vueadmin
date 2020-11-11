import axios from "axios";
import app from "@/config";

// axios.defaults.withCredentials = false;

let baseURL = `${app.request_base_url}api.php`;

const instance = axios.create({
    baseURL,
    timeout: 20000
});

const defaultOpt = {};

function baseRequest(options) {
    const headers = options.headers || {};
    headers["Content-Type"] = "application/json; charset=UTF-8";
    options.headers = headers;
    options.data = JSON.stringify(options.data);
    return instance(options).then(res => {
        const data = res.data || {};
        if (res.status !== 200) {
            return Promise.reject({ msg: "请求失败", res, data });
        } else {
            return Promise.resolve(data, res);
        }
    });
}

const request = ["post", "put", "patch"].reduce((request, method) => {
    request[method] = (url, data = {}, options = {}) => {
        return baseRequest(
            Object.assign({ url, data, method }, defaultOpt, options)
        );
    };
    return request;
}, {});

["get", "delete", "head"].forEach(method => {
    request[method] = (url, params = {}, options = {}) => {
        return baseRequest(
            Object.assign({ url, params, method }, defaultOpt, options)
        );
    };
});

export default request;