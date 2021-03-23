<template>
  <div id="home">
    <!-- 1. 顶部的导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 2. 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>

    <!-- 3. 推荐 -->
    <recommend-view :recommends="recommends"></recommend-view>

    <!-- 4. 本周流行,就一张图片 -->
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
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
#home {
  padding-top: 44px;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>