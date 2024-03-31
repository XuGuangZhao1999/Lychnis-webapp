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

    <!-- <el-container direction="horizontal" class="common container-sub">
        <viewerPanel></viewerPanel>
      <el-aside id="aside">
        <controlPanel></controlPanel>
      </el-aside>
    </el-container> -->
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
      onDrag: function() {
        window.requestAnimationFrame(() => {
        })
      }
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

.container-sub {
  height: calc(100vh - 30px);
  width: 100vw;
  overflow: auto;
}

#header {
  width: 100%;
  height: 30px;
}

#aside {
  margin: 0px;
  border-top: 0px;
  border-left: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
  border-bottom: 1px solid #DCDFE6;
  padding: 0px;
  height: 100%;
  width: 30%;
  overflow: auto;
}
</style>
