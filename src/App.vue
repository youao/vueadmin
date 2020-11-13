<template>
  <div id="app" class="fmix-v">
      <Header v-show="!headerHide" />
      <el-container>
        <Aside v-show="!asideHide" />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Aside from '@/components/Aside';

export default {
  name: "App",
  components: {
    Header,
    Aside,
  },
  data() {
    return {
      asideHide: false,
      headerHide: false,
    };
  },
  watch: {
    $route(to, from) {
      this.asideHide = to.meta.asideHide;
      this.headerHide = to.meta.headerHide;
    }
  }
};
</script>

<style>

</style>
