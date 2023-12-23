<!-- Main page -->
<template>
  <el-container direction="vertical" class="common container-top">
    <appHeader id="header"></appHeader>
    <el-container direction="horizontal" class="common container-sub">
        <viewerPanel></viewerPanel>
      <el-aside id="aside" class="common">
        <controlPanel></controlPanel>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
import appHeader from './appHeader.vue'
import controlPanel from './controlPanel.vue'
import viewerPanel from './viewerPanel.vue'

export default {
  name: 'mainPage',
  components: {
    appHeader,
    controlPanel,
    viewerPanel,
  },
}
</script>

<style>
.common {
  margin: 0px !important;
  border: 0px !important;
  padding: 0px !important;
}

.container-top {
  height: 100vh;
  width: 100vw;
}

.container-sub {
  height: calc(100vh - 30px);
  width: 100vw;
}

#header {
  width: 100%;
  height: 30px;
}

#aside {
  height: 100%;
  width: 30%;
  overflow: auto;
}
</style>
