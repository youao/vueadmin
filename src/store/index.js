import Vue from "vue";
import Vuex from "vuex";
import cookie from "@/utils/cookie";
import { getAppConfig } from "@/api/app";

Vue.use(Vuex);

const state = {
    appInfo: cookie.get('appInfo') || null,
    adminInfo: cookie.get('adminInfo') || null,
    token: cookie.get('token') || null
};

const getters = {
    isLogin(state) {
        return state.token && state.adminInfo;
    }
};

const mutaions = {
    updateAppInfo(state, data) {
        state.appInfo = data;
        store.cookie("appInfo", data);
    },
    login(state, datas) {
        state.token = datas.token;
        state.adminInfo = datas.adminInfo;
        store.cookie("token", datas.token);
        store.cookie("adminInfo", datas.adminInfo);
    },
    logout(state) {
        state.token = undefined;
        state.adminInfo = undefined;
        store.remove("token");
        store.remove("adminInfo");
    },
    updateAdminInfo(state, data) {
        state.adminInfo = data;
        store.cookie("adminInfo", data);
    }
};

const actions = {
    appInfo({ state, commit }, force) {
        if (state.appInfo && !force)
            return Promise.resolve(state.appInfo);
        else
            return new Promise(reslove => {
                getAppConfig().then(res => {
                    commit("updateAppInfo", res.data);
                    reslove(res.data);
                });
            }).catch(() => {
                dialog.error("获取信息失败!");
            });
    },
    adminInfo({ state, commit }, force) {
        if (state.adminInfo && !force)
            return Promise.resolve(state.adminInfo);
        else
            return new Promise(reslove => {
                getAdminInfo().then(res => {
                    commit("updateAdminInfo", res.data);
                    reslove(res.data);
                });
            }).catch(() => {
                dialog.error("获取信息失败!");
            });
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutaions,
    actions
});

export default store;