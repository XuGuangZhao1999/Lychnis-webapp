<!-- The main component and page entry file of the Vue project. -->
<template>
  <el-config-provider v-bind:locale="this.$store.state.core.locale">
    <mainPage/>
  </el-config-provider>
</template>

<script>
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  border: 0px;
  height: 100vh;
  width: 100vw;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
