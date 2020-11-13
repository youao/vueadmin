const menu = [{
        title: "概述",
        path: "/",
    },
    {
        title: "会员管理",
        sub: [{
                title: "会员列表",
                path: "/user/list",
            },
            {
                title: "会员分组",
                path: "/user/group",
            },
            {
                title: "会员等级管理",
                path: "/user/level",
            },
        ],
    },
    {
        title: "商城管理",
        path: "/goods/list",
    },
    {
        title: "全局设置",
        path: "/app/set",
    },
];

export default menu;