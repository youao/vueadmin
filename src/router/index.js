import Vue from 'vue'
import Router from 'vue-router'
import cookie from '@/utils/cookie'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'Hello',
    component: () =>
        import (`@/views/common/Hello`)
}, {
    path: '/app/set',
    name: 'AppSet',
    component: () =>
        import (`@/views/app/Set`)
}, {
    path: '/login',
    name: 'Login',
    meta: {
        asideHide: true,
        headerHide: true
    },
    component: () =>
        import (`@/views/user/Login`)
}, {
    path: '*',
    name: 'NotDefined',
    component: () =>
        import ('@/views/common/404')
}];

const router = new Router({ routes });

router.beforeEach((to, form, next) => {
    const token = cookie.get('token');
    if (!token && to.name != 'Login' && !to.meta.notAuth) {
        next('/login');
    } else next();
});

export default router;