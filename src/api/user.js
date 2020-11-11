import request from "@/utils/request";

/**
 * 账号密码登录
 * @param account: 账号
 * @param password: 密码
 * @returns {*}
 */
export function loginByPassword(account, password) {
    return request.post('/admin/login', { account, password });
}