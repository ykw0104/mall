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
    probeType: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    //1. 创建better-scroll对象
    // 不用document.querySelector, 防止其他组件里也有class为wrapper的元素
    // this.bscroll = new BScroll(document.querySelector(".wrapper"));
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType, //实时监听scroll事件
    });

    //2. 监听
    // 监听滚动的位置
    this.bscroll.on("scroll", (position) => {
      //监听到的位置传给父组件
      this.$emit("scroll", position);
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
