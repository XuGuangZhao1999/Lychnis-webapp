<template>
  <!-- Edit menu -->
  <el-sub-menu :index="index">
    <template #title>编辑</template>
    <el-menu-item index="2-1">根据节点移动脑片</el-menu-item>
    <el-menu-item index="2-2">移动选中的节点</el-menu-item>
    <el-divider class="hLine"/>
    <el-menu-item index="2-3">创建定位节点</el-menu-item>
    <el-sub-menu index="2-4">
      <template #title>删除节点</template>
      <el-menu-item index="2-4-1">选中的节点</el-menu-item>
      <el-menu-item index="2-4-2">选中的纤维上所有节点</el-menu-item>
      <el-menu-item index="2-4-3">选中节点类型的所有节点</el-menu-item>
      <el-menu-item index="2-4-4">所有节点</el-menu-item>
    </el-sub-menu>
    <el-divider class="hLine"/>
    <el-menu-item index="2-5">生成节点分组</el-menu-item>
    <el-menu-item index="2-6">节点检查</el-menu-item>
    <el-menu-item index="2-7">移动到下一个待标注点</el-menu-item>
  </el-sub-menu>
</template>

<script>
export default {
  name: 'editMenu',
  props: {
    index: Number
  },
  setup() {
  }
}
</script>

<style>

</style>