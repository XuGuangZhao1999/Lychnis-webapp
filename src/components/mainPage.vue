<!-- Main page -->
<template>
  <el-container direction="vertical" class="common container-top">
    <appHeader id="header"></appHeader>
    <div class="split">
      <div id="split-0">
        <viewerPanel></viewerPanel>
      </div>
      <div id="split-1">
        <controlPanel></controlPanel>
      </div>
    </div>
  </el-container>
</template>

<script>
import appHeader from './appHeader.vue'
import controlPanel from './controlPanel.vue'
import viewerPanel from './viewerPanel.vue'
import Split from 'split.js'

export default {
  name: 'mainPage',
  components: {
    appHeader,
    controlPanel,
    viewerPanel,
  },
  mounted() {
    Split(['#split-0', '#split-1'], {
      sizes: [70, 30],
      minSize: 300,
      gutterSize: 2,
      direction: 'horizontal',
      cursor: 'col-resize',
    })
  },
}
</script>

<style scoped>
.split {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 30px);
    width: 100vw;
}

.common {
  margin: 0px !important;
  border: 0px !important;
  padding: 0px !important;
}

.container-top {
  height: 100vh;
  width: 100vw;
}

#header {
  width: 100%;
  height: 30px;
}
</style>
