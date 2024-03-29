<template>
  <!-- File menu -->
  <el-sub-menu :index="index">
    <template #title>{{ $t('file.title') }}</template>
    <el-menu-item index="1-1" v-on:click="loadProject()">加载工程文件</el-menu-item>
    <el-menu-item index="1-2">{{ $t('file.save') }}</el-menu-item>
    <el-menu-item index="1-3">{{ $t('file.saveAs') }}</el-menu-item>
    <el-divider class="hLine"/>
    <el-menu-item index="1-4">打开图像文件</el-menu-item>
    <el-menu-item index="1-5">以sps形式打开图像</el-menu-item>
    <el-menu-item index="1-6">导入节点</el-menu-item>
    <el-menu-item index="1-7">导入参数</el-menu-item>
    <el-menu-item index="1-8">图像信息</el-menu-item>
    <el-divider class="hLine"/>
    <el-sub-menu index="1-9">
      <template #title>导出节点</template>
      <el-menu-item index="1-9-1">Imaris格式</el-menu-item>
      <el-menu-item index="1-9-2">Lychnis格式</el-menu-item>
      <el-menu-item index="1-9-3">swc格式</el-menu-item>
      <el-menu-item index="1-9-4">Imaris spots格式</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="1-10">生成动画</el-menu-item>
    <el-menu-item index="1-11">导出图像</el-menu-item>
  </el-sub-menu>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'fileMenu',
  props: {
    index: Number,

  },
  setup() {
    const store = useStore()

    function loadProject() {
      window.cefQuery({
        request: "loadProject",
        onSuccess: function(response) {
          // Load project success, paint response data to canvas.
          // paintCanvas(response);
          console.log("loadProject success: " + response);
        },
        onFailure: function(error_code, error_message) {
          // Load project failed, output error message to console.
          console.log("loadProject failed: " + error_code + " " + error_message);
        }
      })
    }

    return { store, loadProject}
  },
}
</script>

<style>

</style>