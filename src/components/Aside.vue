<template>
  <el-aside width="200px">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
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
</template>

<script>
import menu from "@/libs/aside";

export default {
  name: "Aside",
  data() {
    return {
      defaultActive: "/",
      menu,
    };
  },
  mounted: function () {
    this.defaultActive = this.$route.path;
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
