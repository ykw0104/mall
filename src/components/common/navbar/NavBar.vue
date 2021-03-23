<template>
  <div class="nav-bar">
    <!-- 顶部左侧位置 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 顶部中间位置 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 顶部右侧位置 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  display: flex;
  /* 一般顶部导航高度都是44px */
  height: 44px;
  line-height: 44px;
  text-align: center;

  /* 设置阴影, 垂直方向偏移1px */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

/* 左边和右边部分宽度各自为60px */
.left,
.right {
  width: 60px;
}

/* 中间部分占据剩余的宽度 */
.center {
  flex: 1;
}
</style>