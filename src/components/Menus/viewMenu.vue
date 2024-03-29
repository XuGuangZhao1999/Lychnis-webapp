<template>
  <!-- View menu -->
  <el-sub-menu :index="index">
    <template #title>查看</template>
    <el-menu-item index="3-1">显示/隐藏所有节点</el-menu-item>
    <el-menu-item index="3-2">显示/隐藏未选中的节点</el-menu-item>
    <el-menu-item index="3-3">显示/隐藏当前图像块</el-menu-item>
    <el-menu-item index="3-4">显示/隐藏ROI数据块</el-menu-item>
    <el-menu-item index="3-5">ROI设置</el-menu-item>
    <el-menu-item index="3-6">切换自动加载</el-menu-item>
    <el-menu-item index="3-7">显示设置</el-menu-item>
    <el-menu-item index="3-8">开启/关闭标注模式</el-menu-item>
  </el-sub-menu>
</template>

<script>
export default {
  name: 'viewMenu',
  props: {
    index: Number
  },
  setup() {
  }
}
</script>

<style>

</style>