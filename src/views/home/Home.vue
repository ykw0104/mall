<template>
  <div id="home">
    <!-- 1. 顶部的导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- scroll: 滚动组件,设置可滚动的区域,这里有better-scroll实现 -->
    <scroll class="scroll-wrapper" ref="scroll">
      <!-- 2. 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>

      <!-- 3. 推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>

      <!-- 4. 本周流行,就一张图片 -->
      <feature-view></feature-view>

      <!-- 5. Tab栏(流行,新款,精选) -->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

      <!-- 6. 具体的商品显示(流行,新款,精选) -->
      <!-- 传的是流行,新款,精选其中一种类型的商品 -->
      <goods-list :oneOfGoods="goods[currentType].list"></goods-list>
    </scroll>

    <!-- 返回顶部按钮 -->
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [], //保存轮播图的数据
      recommends: [], //保存推荐的数据
      //保存流行,新款,精选的商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      //当前TabControl中流行,新款,精选其中一个的值
      currentType: "pop",
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
    /**************************** 网络请求的方法 **************************/
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

    /**************************** 事件监听相关的方法 **************************/
    // 让Home.vue知道在TabControl里点击流行,新款,精选其中哪一个, 最后给GoodsList
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.bscroll.scrollTo(0, 0, 800);
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;

  position: relative;
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

.scroll-wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>s