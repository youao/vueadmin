<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="应用名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="应用Logo">
        <el-input v-model="form.logo" placeholder="输入图片链接"></el-input>
        <p>建议尺寸200*200</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "AppSet",
  data() {
    return {
      form:{
          name: '',
          logo: ''
      }
    };
  },
  mounted: function() {

  },
  methods: {
      onSubmit() {

      }
  }
};
</script>

<style scoped>

</style>
