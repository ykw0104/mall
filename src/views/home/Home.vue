<template>
  <div id="home">
    <!-- 顶部的导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";

import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [], //保存轮播图的数据
      recommends: [], //保存推荐的数据
    };
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>