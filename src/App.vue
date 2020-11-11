<template>
  <div id="app">
    <el-container>
      <el-header v-show="!headerHide" :class="['header', 'fmix-align']">
        <img src="./assets/logo.png" class="logoimg" />
        <span class="logofont">花棒商城系统</span>
      </el-header>
      <el-container>
        <el-aside v-show="!asideHide">
          <el-menu
            class="el-menu-vertical-demo"
            default-active="1"
            @select="handleselect"
          >
            <div v-for="(sub, index) in menu" :key="index">
              <el-submenu :index="sub.title" v-if="sub.sub">
                <template slot="title">
                  <i :class="sub.icon"></i>
                  <span>{{ sub.title }}</span>
                </template>
                <el-menu-item-group v-if="sub.sub && sub.sub.length > 0">
                  <el-menu-item
                    v-for="(it, i) in sub.sub"
                    :key="index + '-' + i"
                    :index="it.path"
                    >{{ it.title }}</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item :index="sub.path" v-else>
                <i :class="sub.icon"></i>
                <span>{{ sub.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      asideHide: false,
      headerHide: false,
      menu: [
        {
          title: "会员管理",
          icon: "el-icon-menu",
          sub: [
            {
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
          icon: "el-icon-goods",
          path: "/goods/list",
        },
        {
          title: "全局设置",
          icon: "el-icon-setting",
          path: "/app/set",
        },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.asideHide = to.meta.asideHide;
      this.headerHide = to.meta.headerHide;
    }
  },
  methods: {
    handleselect(path) {
      if (path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style>
.header {
  border-bottom: 1px solid #eee;
}
.logoimg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.logofont {
  font-size: 24px;
}
</style>
