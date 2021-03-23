<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部Tabbar: 首页, 分类, 购物车, 我的 -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
