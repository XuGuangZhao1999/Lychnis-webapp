<template>
  <el-sub-menu :index="index">
    <template #title>帮助</template>
    <el-menu-item index="4-1" id="debug" v-on:click="this.$store.commit('status/showMessage', 'This is a debug message.')">关于</el-menu-item>
    <el-sub-menu index="4-2">
      <template #title>语言</template>
      <el-menu-item index="4-2-1" @click="changeLanguage('zhCn')">简体中文</el-menu-item>
      <el-menu-item index="4-2-2" @click="changeLanguage('en')">English</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
</template>
 
 <script>
import { useStore } from 'vuex'

export default {
  name: 'helpMenu',
  props: {
    index: Number
  },
  setup() {
    const store = useStore()

    function changeLanguage(lang) {
      store.commit('core/setLanguage', lang);
      store.commit('core/setI18N', lang);
    }

    return {
      changeLanguage,
      store
    }
  }
}
 </script>
 
 <style>
 
 </style>