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
  mounted() {
    // 不用document.querySelector, 防止其他组件里也有class为wrapper的元素
    // this.bscroll = new BScroll(document.querySelector(".wrapper"));
    this.bscroll = new BScroll(this.$refs.wrapper);
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
