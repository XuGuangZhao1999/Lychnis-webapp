<template>
  <!-- Menu bar -->
  <el-menu id="menu" mode="horizontal" background-color="#545C64" text-color="#FFFFFF">
    <el-sub-menu index="1">
      <template #title>文件</template>
      <el-menu-item id="loadProject" index="1-1" v-on:click="loadProject()">加载工程文件</el-menu-item>
      <el-menu-item index="1-2">保存工程</el-menu-item>
      <el-menu-item index="1-3">工程另存为...</el-menu-item>
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
    <el-sub-menu index="2">
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
    <el-sub-menu index="3">
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
    <el-sub-menu index="4">
      <template #title>帮助</template>
      <el-menu-item index="4-1" id="debug" v-on:click="deBug()">关于</el-menu-item>
      <el-sub-menu index="4-2">
        <template #title>语言</template>
        <el-menu-item index="4-2-1">简体中文</el-menu-item>
        <el-menu-item index="4-2-2">English</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="5">
      <statusBar status="Status" bShow="true"></statusBar>
    </el-menu-item>
  </el-menu>
</template>
  
<script>
/*eslint-disable*/
import statusBar from './statusBar.vue'

export default {
  name: 'menuBar',
  components: {
    statusBar
  },
  setup() {
    function renderImageToCanvas(img){
      let canvas = document.getElementById("imageContainer")
      let ctx = canvas.getContext("2d")

      ctx.drawImage(img, 0, 0)
    }

    function loadProject() {
      window.cefQuery({
        request: "loadProject",
        onSuccess: function(response) {
          // Render image to canvas.
          let base64_image = response
          let img = new Image()
          img.src = "data:image/jpg;base64," + base64_image

          img.onload = renderImageToCanvas(img) 
        },
        onFailure: function(error_code, error_message) {
          // Load project failed, output error message to console.
          console.log("loadProject failed: " + error_code + " " + error_message);
        }
      })
    }
    
    return {
      loadProject,
      renderImageToCanvas
    }
  },
}
</script>

<style scoped>
#menu {
  margin: 0px;
  padding: 0px;
  border: 0px;
  height: 30px;
}

.hLine {
  margin: 0px !important;
}

</style>
  