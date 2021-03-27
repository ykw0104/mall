<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入BetterScroll
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    // 控制是否scroll
    probeType: {
      type: Number,
      default: 0,
    },
    //控制是否上拉
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //1. 创建better-scroll对象
    // 不用document.querySelector, 防止其他组件里也有class为wrapper的元素
    // this.bscroll = new BScroll(document.querySelector(".wrapper"));
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType, //实时监听scroll事件
      pullUpLoad: this.pullUpLoad, //监听上拉事件
    });

    //2. 监听
    //2.1 监听滚动的位置
    this.bscroll.on("scroll", (position) => {
      //监听到的位置传给父组件
      this.$emit("scroll", position);
    });

    //2.2 监听上拉事件
    this.bscroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
</style>
