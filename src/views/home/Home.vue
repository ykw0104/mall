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

    <!-- 5.Tab栏(流行,新款,精选) -->
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [], //保存轮播图的数据
      recommends: [], //保存推荐的数据
      goods: {
        //保存流行,新款,精选的商品数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata_M();

    //2. 请求流行,新款,精选的商品数据
    this.getHomeGoods_M("pop");
    this.getHomeGoods_M("new");
    this.getHomeGoods_M("sell");
  },
  methods: {
    // 1. 请求并保存多个数据
    getHomeMultidata_M() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //2. 请求并保存流行,新款,精选的商品数据
    getHomeGoods_M(type) {
      const page = this.goods[type].page + 1; //取出原来page,再加1
      getHomeGoods(type, page).then((res) => {
        //保存更新数据
        this.goods[type].list.push(...res.data.list); //获取的下一页数据保存到相应的goods中
        this.goods[type].page += 1; //页面加1
      });
    },
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

.tab-control {
  position: sticky;
  top: 44px;
}
</style>