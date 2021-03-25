<template>
  <div class="tab-control">
    <div v-for="(item,index) of titles" :key="item" class="tab-control-item" :class="{active: index === curIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      curIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.curIndex = index;
      this.$emit("tabClick", index); //给Home.vue传index, 知道点击了流行,新款,精选中点击了哪个
    },
  },
};
</script>
<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-style: 15px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>