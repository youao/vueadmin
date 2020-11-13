import request from "@/utils/request";

/**
 * 获取全局配置
 */
export function getAppConfig() {
    return request.get('/app/config', {});
}

export function editAppConfig(name, logo) {
    return request.post('/app/config', { name, logo });
}