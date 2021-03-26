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
      betterScroll: null,
    };
  },
  mounted() {
    // 不用document.querySelector, 防止其他组件里也有class为wrapper的元素
    // this.betterScroll = new BScroll(document.querySelector(".wrapper"));
    this.betterScroll = new BScroll(this.$refs.wrapper);
  },
};
</script>
<style scoped>
</style>
