<template>
    <header :class="['header', 'fmix-align']">
      <img src="@/assets/logo.png" class="logoimg" />
      <span class="logofont">花棒</span>
    </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {}
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  border-bottom: 1px solid #eee;
}
.logoimg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.logofont {
  font-size: 20px;
}
</style>
