<template>
  <div class="view">
    <img src="@/assets/logo.png" class="logo" alt="" />
    <el-form class="demo-ruleForm" :model="form" :rules="rules" ref="form">
      <el-form-item prop="account">
        <el-input
          type="account"
          v-model="form.account"
          placeholder="账号"
          required
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="密码"
          required
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :class="['btn-block']" type="primary" @click="subLogin"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginByPassword } from "@/api/user";
import cookie from '@/utils/cookie';

export default {
  name: "Login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { max: 20, message: "长度不大于 20 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    subLogin() {
      this.$refs["form"].validate((valid) => {
        if (!valid) return;
        loginByPassword(this.form.account, this.form.password)
          .then((res) => {
            cookie.set('token', res.data.token);
            this.$router.push('/');
            this.$notify.success({
              message: res.msg,
            });
          })
          .catch((err) => {
            this.$notify.error({
              message: err.msg,
            });
          });
      });
    },
  },
};
</script>

<style scoped>
.view {
  width: 375px;
  margin: auto;
  padding-top: 100px;
}
.logo {
  display: block;
  width: 50px;
  height: 50px;
  margin: 15px auto;
}
.el-button.btn-block {
  display: block;
  width: 100%;
}
</style>
