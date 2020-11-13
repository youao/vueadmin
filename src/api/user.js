import request from "@/utils/request";

/**
 * 管理员账号密码登录
 * @param account: 账号
 * @param password: 密码
 * @returns {*}
 */
export function loginByPassword(account, password) {
    return request.post('/admin/login', { account, password });
}

/**
 * 获取管理员信息
 */
export function getAdminInfo() {
    return request.post('/admin/info', {});
}