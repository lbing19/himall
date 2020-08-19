<template>
  <div class='goods-list-item'>
    <img :src='goodsItem.show.img' />
    <div>
      <p>{{goodsItem.title}}</p>
      <span>{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  width: 50%;
}
.goods-list-item img {
  width: 100%;
}
</style>