<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="应用名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="应用Logo">
        <el-input v-model="form.logo" placeholder="选择本地图片" readonly>
        </el-input>
        <el-upload
          class="uploader fmix-center"
          :action="actionUrl"
          :show-file-list="false"
          :on-success="upPicSuccess"
          :style="{ 'margin-top': '10px' }"
        >
          <img v-if="form.logo" :src="form.logo" />
          <i v-else class="el-icon-plus" style="font-size: 24px"></i>
        </el-upload>
        <p>建议尺寸200*200</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import app from "@/config";
import { getAppConfig, editAppConfig } from "@/api/app";

export default {
  name: "AppSet",
  data() {
    return {
      actionUrl: `${app.request_base_url}api.php/upload/img`,
      form: {
        name: "",
        logo: "",
      },
      dialogImageUrl: "",
      dialogVisible: false,
      uploaderShow: true,
    };
  },
  mounted: function () {
    getAppConfig().then((res) => {
      this.form = res.data;
    });
  },
  methods: {
    onSubmit() {
      let f = this.form;
      editAppConfig(f.name, f.logo).then((res) => {
        this.$notify.success({
          message: res.msg,
        });
      });
    },
    upPicPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    upPicSuccess(res, file, fileList) {
      if (res.status == 1) {
        this.form.logo = res.data;
      }
    },
  },
};
</script>

<style scoped>
.uploader {
  width: 120px;
  height: 120px;
  line-height: 0;
  border-radius: 4px;
  background: #eee;
  overflow: hidden;
}
.uploader img {
  width: 100%;
  height: 100%;
}
</style>
