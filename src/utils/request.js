import axios from "axios";
import app from "@/config";
import Qs from "qs";
import cookie from "@/utils/cookie";

// axios.defaults.withCredentials = false;

let baseURL = `${app.request_base_url}api.php`;

const instance = axios.create({
    baseURL,
    transformRequest: [function(data) { // 转换数据
        data = Qs.stringify(data); // 通过Qs.stringify转换为表单查询参数
        return data;
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Auth-Token': cookie.get('token')
    },
    timeout: 20000
});

const defaultOpt = {};

function baseRequest(options) {
    return instance(options).then(res => {
        const data = res.data || {};
        if (res.status !== 200) {
            return Promise.reject({ msg: "请求失败", res, data });
        }
        if (data.status === 0) {
            return Promise.reject(data);
        } else {
            return Promise.resolve(data);
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