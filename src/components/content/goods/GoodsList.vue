<template>
  <div class="goods">
    <goods-list-item v-for="item of oneOfGoods" :oneOfGoodsItem="item" :key="item.iid"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem.vue";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    //获取流行,新款,精选三种类型中的一种商品
    oneOfGoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>