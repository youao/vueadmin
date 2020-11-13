<template>
  <div id="app" class="fmix-v">
      <header-o v-show="!headerHide" />
      <el-container>
        <el-aside v-show="!asideHide">
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="defaultMenu"
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
  </div>
</template>

<script>
import menu from '@/libs/aside';
import Header from '@/components/Header';

export default {
  name: "App",
  components: {
    'header-o': Header,
  },
  data() {
    return {
      asideHide: false,
      headerHide: false,
      defaultMenu: '/',
      menu,
    };
  },
  watch: {
    $route(to, from) {
      this.asideHide = to.meta.asideHide;
      this.headerHide = to.meta.headerHide;
    }
  },
  mounted: function() {
    this.defaultMenu = this.$route.path;
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

</style>
